import React, { Component } from 'react';
import SignupForm from './SignupForm.jsx';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions.jsx'
import PropTypes from 'prop-types';


class SignupPage extends Component {
  render () {
    const { userSignupRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
          <h1>Hello asdf</h1>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);