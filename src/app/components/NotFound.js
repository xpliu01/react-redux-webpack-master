/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>This is a demo 404 page!</h1>
        <hr />
        <Link to="/">Back To Home View</Link>
      </div>
    );
  }
}
