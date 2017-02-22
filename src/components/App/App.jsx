import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SelectBank, Connecting, InteractiveScreen, Step1, Step2, Step3, Success } from "screens";

const App = ({ stage }) => {
  const screens = {
    selectBank: SelectBank,
    connecting: Connecting,
    interactiveScreen: InteractiveScreen,
    step1: Step1,
    step2: Step2,
    step3: Step3,
    success: Success,
  }

  const getScreen = () => {
    const Component = screens[stage]

    return Component ? <Component /> : (stage + " has no screen")
  }

  return <div className="app">
    <div className="widget-container">
      <div className="login">
      <span className="close"></span>
      <div className="header header-main header-start">
        <span className="logo">Connect</span>
      </div>
      {getScreen()}
      </div>
    </div>
  </div>
}

export default connect( state => ({
  stage: state.dataReducer.stage,
}), null)(App);
