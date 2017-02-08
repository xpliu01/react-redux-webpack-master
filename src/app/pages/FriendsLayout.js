/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React, { Component, PropTypes } from 'react';

import AddFriendInput from './AddFriendInput';
import FriendList from './FriendList';
import '../styles/FriendListApp.scss'

export default class FriendsLayout extends Component {
  static propTypes = {
    friends: PropTypes.object.isRequired
  };

  render() {
    const { friends: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">
        <h1>Best Rappers List</h1>
        <AddFriendInput />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}
