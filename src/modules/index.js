import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import dataReducer from '../reducers/dataReducer.js';

export default combineReducers({ routing, dataReducer, form });
