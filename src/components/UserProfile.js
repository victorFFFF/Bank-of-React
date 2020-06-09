import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
      <div>
      <Link class="btn btn-dark btn-lg" to="/"> Home</Link>
        <div  class="col-md-12 text-center">
          <h1 class="text-warning">User Profile</h1>
          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
        </div>
        </div>
    );
  }
}

export default UserProfile;