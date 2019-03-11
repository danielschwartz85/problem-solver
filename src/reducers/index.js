import {combineReducers} from 'redux';
import problems from './problemReducer';
import eyeTypes from './eyeTypesReducer';

export default combineReducers({
  problems,
  eyeTypes,
});
