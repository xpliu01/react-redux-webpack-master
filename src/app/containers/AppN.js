/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React, { PropTypes } from 'react';

const App = (props) => (
  <div className="page-container">
    {React.cloneElement({...props}.children, {...props})}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
