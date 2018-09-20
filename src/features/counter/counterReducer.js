import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './counterConstants';
import { createReducer } from '../../app/common/util/createReducer';

const initState = {
  count: 0
};

export const incrementCounter = (state, payload) => {
  return {
    ...state,
    count: state.count + 1
  };
};

export const decrementCounter = (state, payload) => {
  return {
    ...state,
    count: state.count - 1
  };
};

export default createReducer(initState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
