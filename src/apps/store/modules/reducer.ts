import { combineReducers } from 'redux'
import carReducer from './cars/reducer'
import { State } from './state';

export default combineReducers<State>({
    cars: carReducer
});