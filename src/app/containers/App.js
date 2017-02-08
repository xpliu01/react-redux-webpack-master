/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React from 'react';
import { Link } from 'react-router';

export default class Application extends React.Component {
  render() {
    return (
        <div>
          <div className="header">
            <Link to="page1">page1</Link>
            <Link to="page2">page2</Link>
            <Link to="page3">page3</Link>
          </div>
          {this.props.children}
        </div>
    );
  }
}
