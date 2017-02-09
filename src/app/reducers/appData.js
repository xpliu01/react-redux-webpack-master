import * as systemTypes from '../constants/systemActionTypes'


const initialState = {
    Account:'',
    errorInfo:'',
    userData:{},
    VerCodeToken:'',
    isBind:false,
    reading:false,
    enterprise:{},
    Token:'',
    advert:[],
    sId:'',
    setting:{}
};

export default function appData(state = initialState,action) {
  switch (action.type) {
  case systemTypes.SYSTEM_LOGIN_S:
    return Object.assign({}, state, {
        Account: action.data.Account,
        Token: action.data.Token,
        userData: action.data,
        errorInfo:'',
        reading:false,
        msgTargertUser:'',
        msgTargertGroup:''
    })
  case systemTypes.SYSTEM_LOGIN_F:
      return Object.assign({}, state, {
          Account:'',
          errorInfo: action.data,
          //reading:false
      })
  case systemTypes.SYSTEM_USE:
      return Object.assign({}, state, {
              isUse:action.data
      })
  case systemTypes.SYSTEM_LOGIN_READING:
      return Object.assign({}, state, {
          reading:action.data
          //errorInfo:''
      })
   case systemTypes.SYSTEM_MSGUSER:
          return Object.assign({}, state, {
              msgTargertUser:action.data
          })
   case systemTypes.SYSTEM_SETUSERICON:
          return Object.assign({}, state, {
              userData:action.data
          })

  case systemTypes.SYSTEM_ENTERPRISE:
          return Object.assign({}, state, {
              enterprise:action.data
    })   

  case systemTypes.SYSTEM_MSGGROUP:
          return Object.assign({}, state, {
              msgTargertGroup:action.data
          })

  case systemTypes.SYSTEM_BIND:
          return Object.assign({}, state, action.data)
  case systemTypes.SYSTEM_CHECKLOGIN:
          return Object.assign({}, state, action.data)

  default:
    return state
  }
};


