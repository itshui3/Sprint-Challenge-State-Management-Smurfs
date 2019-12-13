import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Village from './Village'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => (
          <div className="App-header">
          <h1 className="App-title" onClick={() => props.history.push('/village')}>SMURFS! 2.0 W/ Redux</h1>
          </div>
          )} />
        <Route path="/village" component={Village} />
      </div>
    );
  }
}

export default App;
