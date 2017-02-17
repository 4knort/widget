import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';

@connect( null, connectActions)
export default class Loader extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.changeStage('success')
    }, 1500)
  }
  render() {
    return (
      <div>
        <img src="http://cdn.idevie.com/wp-content/uploads/2013/01/LoadingCircle_finalani2.gif" alt=""/>
        <ul>
          <li className="active">step1</li>
          <li className="active">step2</li>
          <li className="active">step3</li>
        </ul>
      </div>
    )
  }
}