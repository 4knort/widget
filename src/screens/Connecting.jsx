import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';

@connect( null, connectActions)
export default class Loader extends Component {
  //bad example
  componentDidMount() {
    setTimeout(() => {
      this.props.changeStage('sms');
    }, 2000)
  }
  render() {
    return (
      <div className="loader">
        <img src="http://www.centurylink.com/etc/designs/ewcm/clientlib/images/loading_spinner.gif" alt=""/>
        <ul className="connect-steps">
          <li className="connect-step">step1</li>
          <li className="connect-step">step2</li>
          <li className="connect-step">step3</li>
        </ul>
      </div>
    )
  }
}