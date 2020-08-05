import { combineReducers } from 'redux'
import userReducer from './user'
import weatherReducer from "./weather";

 const rootReducer = combineReducers({ user: userReducer, weather: weatherReducer })



 export default rootReducer