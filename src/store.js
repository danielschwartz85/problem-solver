import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const isDev = process.env.NODE_ENV === 'development';
const middleware = applyMiddleware(...[thunk, isDev && logger].filter(Boolean));
export default createStore(reducers, middleware);
