import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as connectActions from '../actions/connectActions';

// const Loader = () => (
//   <div>
//     <img src="http://cdn.idevie.com/wp-content/uploads/2013/01/LoadingCircle_finalani2.gif" alt=""/>
//   </div>
// )

// export default Loader;

@connect( null, connectActions)
export default class Loader extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <img src="http://cdn.idevie.com/wp-content/uploads/2013/01/LoadingCircle_finalani2.gif" alt=""/>
        <form action="">
          <label htmlFor="">enter sms</label>
          <input type="text"/>
        </form>
      </div>
    )
  }
}