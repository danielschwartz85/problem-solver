import { combineReducers } from 'redux';
import problems from './problemReducer';
import routing from './routingReducer';

export default combineReducers({
  problems,
  routing
});
