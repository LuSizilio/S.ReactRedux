import { clickReducer } from './clickReducer';
import { clickCounter } from './Counter';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
  clickCount: clickCounter
});