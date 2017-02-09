import React, { Component, PropTypes } from 'react';

import AddFriendInput from './AddFriendInput';
import FriendList from './FriendList';

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
