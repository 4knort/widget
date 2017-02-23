import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';


class Loader extends Component {
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
          <li className="connect-step active">Connecting</li>
          <li className="connect-step">Interactive fields</li>
          <li className="connect-step">Getting accounts</li>
          <li className="connect-step">Gettting transactions</li>
          <li className="connect-step">Done</li>
        </ul>
      </div>
    )
  }
}

export default connect( null, connectActions)(Loader);