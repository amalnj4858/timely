import { applyMiddleware,createStore } from 'redux';
import rootReducer from '../Root/rootReducer.js';
import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  )
console.log(store)
export default store;

