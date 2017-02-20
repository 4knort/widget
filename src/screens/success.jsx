import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';

@connect( null, connectActions)
export default class Loader extends Component {
  //bad example view knows about state
  componentDidMount() {
    setTimeout(() => {
      this.props.changeStage('selectBank')
    }, 1500)
  }
  render() {
    return (
      <div>
        <strong>Success</strong>
        <p>redirecting...</p>
      </div>
    )
  }
}