import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';

export const configureStore = state => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancer = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancer);

  const store = createStore(rootReducer, state, composedEnhancer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};
