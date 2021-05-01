import { applyMiddleware,createStore } from 'redux';
import rootReducer from '../Root/rootReducer.js';
import logger from 'redux-logger';  //middleware used for keeping track of redux actions during production 

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  )

export default store;

