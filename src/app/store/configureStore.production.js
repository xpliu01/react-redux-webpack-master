/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(promiseMiddleware)
)(createStore);

export default function configureStore(initialState) {
  return enhancer(rootReducer, initialState);
}
