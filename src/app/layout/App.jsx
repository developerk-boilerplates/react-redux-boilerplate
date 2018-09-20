import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterComponent from '../../features/counter/CounterComponent';
import {
  incrementCounter,
  decrementCounter
} from '../../features/counter/counterActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const actions = {
  incrementCounter,
  decrementCounter
};

export default connect(
  mapStateToProps,
  actions
)(App);
