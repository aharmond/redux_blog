import { combineReducers, } from 'redux';
import posts from './posts';
import nextId from './nextId';

const rootReducer = combineReducers({
  posts,
  nextId,
});

export default rootReducer;