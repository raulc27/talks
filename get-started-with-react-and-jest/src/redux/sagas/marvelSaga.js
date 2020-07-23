import { all, call, put, takeLatest } from 'redux-saga/effects';
import md5 from 'md5';
import { actions } from '../modules/marvel';

function* fetchCharacters() {
  try {
    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`);
    const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${timestamp}`;
    const response = yield call(fetch, url);
    const body = yield response.json();
    const data = (body.data && body.data.results) || [];
    yield put(actions.completeFetchCharacters(data));
  } catch (err) {
    yield put(actions.failFetchCharacters(err));
  }
}

function* watchCharactersRequested() {
  yield takeLatest(actions.FETCH_CHARACTERS_REQUESTED, fetchCharacters);
}

function* marvelSaga() {
  yield all([
    watchCharactersRequested(),
  ]);
}

export default marvelSaga;
