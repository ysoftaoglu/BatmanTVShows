import { combineReducers } from 'redux';
import showsReducer from './shows';

export default combineReducers({
  shows: showsReducer,
});