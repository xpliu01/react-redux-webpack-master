/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React from 'react';
import { render } from 'react-dom';
import { browserHistory ,hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import Root from './Root';
import configureStore from './store/configureStore';
import './styles/common.scss';

const history = syncHistoryWithStore(browserHistory, configureStore);

// Get the DOM Element that will hogggggst our React application
const rootEl = document.getElementById('app');

// Render the React application to the DOM
render(
  <AppContainer errorReporter={Redbox}>
    <Root store={configureStore} history={history} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
   const orgError = console.error; // eslint-disable-line no-console
   console.error = (message) => { // eslint-disable-line no-console
     if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
       // Log the error as normally
       orgError.apply(console, [message]);
     }
   };

  module.hot.accept('./Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Root').default;

    render(
      <AppContainer errorReporter={Redbox}>
        <NextApp store={configureStore} history={history} />
      </AppContainer>,
      rootEl
    );
  });
}
