/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';

const middleWares = [promiseMiddleware,thunkMiddleware];

const createStoreWithMiddleware = applyMiddleware(
    ...middleWares //解构元素
)(createStore)

const store = createStoreWithMiddleware(rootReducer);

export default store;

/*
const enhancer = compose(
 applyMiddleware(promiseMiddleware)
 )(createStore);

 export default function configureStore(initialState) {
 return enhancer(rootReducer, initialState);
 }
 */