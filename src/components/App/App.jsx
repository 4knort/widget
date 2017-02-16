import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SelectBank } from "screens";

const App = ({ stage }) => {
  const screens = {
    selectBank: SelectBank,
  }

  const getScreen = () => {
    const Component = screens[stage]

    return Component ? <Component /> : (stage + " has no screen")
  }

  return <div className="app">
    <div className="container">
      {getScreen()}
    </div>
  </div>
}

export default connect( state => ({
  stage: state.dataReducer.stage,
}), null)(App);

// @connect( state => ({
//   stage: state.stageReducer.stage,
// }), null)
// export default class App extends PureComponent {
//   componentWillMount {
//     this.props.fetchBanks();
//   }

//   screens = {
//     selectBank: SelectBank,
//   }

//   getScreen = () => {
//     const Component = this.screens[this.props.stage]

//     return Component ? <Component /> : (stage + " has no screen")
//   }

//   render() {
//     return <div className="app">
//       <div className="container">
//         {this.getScreen()}
//       </div>
//     </div>
//   }
// }
