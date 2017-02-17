import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SelectBank, Loader, LoaderSms } from "screens";

const App = ({ stage }) => {
  const screens = {
    selectBank: SelectBank,
    loader: Loader,
    loaderSms: LoaderSms,
  }

  const getScreen = () => {
    const Component = screens[stage]

    return Component ? <Component /> : (stage + " has no screen")
  }

  return <div className="app">
    <div className="container">
      <div className="widget">
      {getScreen()}
      </div>
    </div>
  </div>
}

export default connect( state => ({
  stage: state.dataReducer.stage,
}), null)(App);
