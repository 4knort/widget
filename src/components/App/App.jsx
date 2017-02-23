import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SelectBank, Connecting, InteractiveScreen, FetchAccounts, FetchRecent, Error } from "screens";

const App = ({ stage }) => {
  const screens = {
    selectBank: SelectBank,
    connecting: Connecting,
    interactiveScreen: InteractiveScreen,
    fetchAccounts: FetchAccounts,
    fetchRecent: FetchRecent,
    error: Error,
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
