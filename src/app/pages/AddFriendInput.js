import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as friendsActions from '../actions/friendsAction'

class AddFriendInput extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.props.name || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.dispatch(friendsActions.addFriend(name));
      this.setState({ name: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        autoFocus="true"
        className="form-control addFriendInput"
        placeholder="Type the name of a rapper"
        value={this.state.name}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    );
  }
}

function mapStateToProps(state) {
  const {friends} = state;
  return {
    friends
  }
}

export default connect(mapStateToProps)(AddFriendInput);
