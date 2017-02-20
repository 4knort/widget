import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';

class Success extends Component {
  // bad example view knows about state
  componentDidMount() {
    setTimeout(() => {
      this.props.changeStage('selectBank')
    }, 1500)
  }
  render() {
    return (
      <div className="success">
        <strong>Success</strong>
        <p>redirecting...</p>
      </div>
    )
  }
}

export default connect( null, connectActions)(Success);