import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import dataReducer from '../reducers/dataReducer.js';
import { reducer as form } from 'redux-form';

export default combineReducers({ routing, dataReducer, form });
