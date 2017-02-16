import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import dataReducer from '../reducers/dataReducer.js';

export default combineReducers({ routing, dataReducer });
