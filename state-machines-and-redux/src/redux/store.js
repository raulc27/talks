import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import { asImmutable } from '../utils';
import reducer from './reducer';
import saga from './saga';

console.log(reducer);

export const createReduxStore = () => {
    const initialState = asImmutable({});
    const middlewares = [];
    const enhancers = [];
    const sagaMiddleware = createSagaMiddleware();

    middlewares.push(createLogger({ collapsed: true }));
    middlewares.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middlewares));
    const enhancer = composeWithDevTools(...enhancers);
    const store = createStore(
      combineReducers({
        orders: reducer,
      }),
      initialState,
      enhancer,
    );
    sagaMiddleware.run(saga);
    return store;
};
