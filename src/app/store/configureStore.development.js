/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';

const logger = createLogger();
//定义一个全局的中间件
const middleWares = [
  promiseMiddleware,
  thunkMiddleware,
  logger,require('redux-immutable-state-invariant')()
];

const createStoreWithMiddleware = applyMiddleware(
    ...middleWares //解构元素
)(createStore)

const store = createStoreWithMiddleware(rootReducer);

//Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;

/*
 const logger = createLogger();
 const middleWares = [promiseMiddleware, logger, require('redux-immutable-state-invariant')()];

 const enhancer = compose(
 applyMiddleware(...middleWares)
 );

 export default function configureStore(initialState) {
 const store = createStore(rootReducer, initialState, enhancer);

 //Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
 if (module.hot) {
 module.hot.accept('../reducers', () => {
 const nextReducer = require('../reducers').default;
 store.replaceReducer(nextReducer);
 });
 }

 return store;
 }
 */
