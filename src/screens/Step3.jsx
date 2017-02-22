import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';

class Step3 extends Component {
  componentWillUnmount() {
    clearInterval(this.ajaxInterval);
  }
  
  ajaxInterval = setInterval(() => {
    this.props.checkStatus();
  }, 1500);
  
  render() {
    return (
      <div className="loader">
        <img src="http://www.centurylink.com/etc/designs/ewcm/clientlib/images/loading_spinner.gif" alt=""/>
        <ul className="connect-steps">
          <li className="connect-step active">step1</li>
          <li className="connect-step active">step2</li>
          <li className="connect-step active">step3</li>
        </ul>
      </div>
    )
  }
}

export default connect( null, connectActions)(Step3);