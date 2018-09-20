import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from './counterActions';

class CouterComponent extends Component {
  render() {
    return (
      <div className="__counter">
        <h2 className="__h2">{this.props.counter.count}</h2>
        <button className="__btn __positive" onClick={this.props.incrementCounter}>Increase Counter</button>
        <button className="__btn __negative" onClick={this.props.decrementCounter}>Decrease Counter</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const actions = {
  incrementCounter,
  decrementCounter
};

export default connect(
  mapStateToProps,
  actions
)(CouterComponent);
