/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import * as friendsActions from '../actions/friendsAction'
import '../styles/FriendListItem.scss'
import { connect } from 'react-redux';

class FriendListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool
  };

  render() {
    return (
      <li className="friendListItem">
        <div className="friendInfos">
          <div><span>{this.props.name}</span></div>
        <div><small>xx friends-------------- in common</small></div>
        </div>
        <div className="friendActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.dispatch(friendsActions.starFriend(this.props.id))}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className="btn btn-default btnAction" onClick={() => this.props.dispatch(friendsActions.deleteFriend(this.props.id))}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

function mapStateToProps(state) {
    const {friends} = state;
    return {
        friends
    }
}

export default connect(mapStateToProps)(FriendListItem);
