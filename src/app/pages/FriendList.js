/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React, { Component, PropTypes } from 'react';

import FriendListItem from './FriendListItem';
import '../styles/FriendList.scss'

export default class FriendList extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired
  };

  renderList() {
    return this.props.friends.map((friend) =>
      (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          starred={friend.starred}
          {...this.props.actions} />
      )
    );
  }

  render() {
    return (
      <ul className="friendList">
        {this.renderList()}
      </ul>
    );
  }
}
