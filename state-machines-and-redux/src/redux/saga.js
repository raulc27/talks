import { all, put, takeEvery, take, fork, call, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from './actions';

function* notify(action) {
  if (action.meta && action.meta.notify) {
    const message = `"${action.type}" was dispatched`;
    yield put(actions.enqueueSnackbar(message));
  }
}

function* processSteps() {
  yield call(delay, 10000);
  yield put(actions.acceptOrder());
  yield call(delay, 10000);
  yield put(actions.prepareOrder());
  yield call(delay, 10000);
  yield put(actions.leaveToDeliverOrder());
  yield call(delay, 10000);
  yield put(actions.deliverOrder());
}

function* watchOrderRequested() {
  while (true) {
    let action = yield take(actions.ORDER_REQUESTED);
    let task = yield fork(processSteps);
    while (true) {
      action = yield take([
        actions.ORDER_REQUESTED,
        actions.ORDER_CANCELED,
      ]);
      if (task) {
        yield cancel(task);
      }
      if (action.type === actions.ORDER_REQUESTED) {
        task = yield fork(processSteps);
      }
    }
  }
}

function* watchAllActions() {
  yield takeEvery('*', notify);
}

export default function* appSaga() {
  yield all([
    watchAllActions(),
    watchOrderRequested(),
  ]);
}
