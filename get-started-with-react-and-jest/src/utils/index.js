import { Iterable, fromJS } from 'immutable';
import { createBrowserHistory } from 'history';

export const asImmutable = obj => (Iterable.isIterable(obj) ? obj : fromJS(obj));
export const emptyMap = asImmutable({});

export const getHistory = () => {
    window.browserHistory = window.browserHistory || createBrowserHistory();
    return window.browserHistory;
};

export const isDevEnv = () => {
  const nodeEnv = process.env.NODE_ENV;
  return nodeEnv !== 'production' && nodeEnv !== 'test';
};
