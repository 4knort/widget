import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';

class Error extends Component {
  
  render() {
    const errorMessage = this.props.failMessage
    return (
      <div className="loader">
        <form action="">
          <div>{errorMessage}</div>
          <div className="form-buttons-wrap">
            <input type="submit" className="submit submit-full" value="Try again"/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect( state => ({
  html: state.dataReducer.html,
  failMessage: state.dataReducer.failMessage,
}), connectActions)(Error);