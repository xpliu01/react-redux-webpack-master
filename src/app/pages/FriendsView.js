/**
 * User: xpliu
 * Date: 2017/2/8 15:06
 * 创建原因：
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsLayout from './FriendsLayout';
import {ADD_FRIEND,STAR_FRIEND,DELETE_FRIEND} from "../constants/friendsActionType.js"

class FriendsView extends Component {
    componentDidMount() {
        this.props.dispatch({type:ADD_FRIEND,name:"刘孝朋"});
    }
    render() {
        return (
          <div>
            <FriendsLayout {...this.props} />
          </div>
        );
    }
}

function mapStateToProps(state) {
    const {friends} = state;
    return {
        friends
    }
}

export default connect(mapStateToProps)(FriendsView);