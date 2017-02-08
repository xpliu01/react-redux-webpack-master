/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.production').default;
}
else {
  module.exports = require('./configureStore.development').default;
}
