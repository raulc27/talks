import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { createReduxStore } from './redux';
import AppContainer from './containers/AppContainer';
import Notifier from './containers/Notifier';

const store = createReduxStore();

window.reduxStore = store;

ReactDOM.render(
    (
      <Provider store={store}>
        <SnackbarProvider>
          <Fragment>
            <Notifier />
            <AppContainer />
          </Fragment>
        </SnackbarProvider>
      </Provider>
    ),
    document.getElementById('app'),
  );
