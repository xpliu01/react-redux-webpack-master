/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import friends from './friends';
import appData from './appData';

export default combineReducers({
    routing,
    friends: friends,
    appData: appData,
});
