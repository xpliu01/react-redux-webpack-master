import * as systemTypes from '../constants/systemActionTypes'


const initialState = {
    userData:{},
};

export default function appData(state = initialState,action) {
  switch (action.type) {
  case systemTypes.SYSTEM_LOGIN_S:
    return Object.assign({}, state, {
        userData: action.data,
        errorInfo:'',
        reading:false,
    })
  case systemTypes.SYSTEM_LOGIN_F:
      return Object.assign({}, state, {
          Account:'',
          errorInfo: action.data,
      })
  default:
    return state
  }
};


