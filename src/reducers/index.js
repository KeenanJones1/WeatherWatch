import { combineReducers } from 'redux'
import userReducer from './user'
import weatherReducer from "./weather";

export const rootReducer = combineReducers({ user: userReducer, weather: weatherReducer })