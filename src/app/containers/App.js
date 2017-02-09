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
