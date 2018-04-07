import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);
export default createStore(reducers, middleware);
