import axios from 'axios';
import * as types from 'constants/actionTypes';

function setUsers(data) {
  return {
    type: types.SET_USERS,
    payload: data,
  };
}

export function fetchUsers(query) {
  return function thunkFetch(dispatch) {
    axios.get(`https://api.github.com/search/users?q=${query}`).then(response => {
      dispatch(setUsers(response.data.items));
    });
  };
}

function successLogin() {
  return {
    type: types.SUCCESS_LOGIN,
    payload: 'connecting'
  }
}

function errorLogin() {
  return {
    type: types.ERROR_LOGIN,
    payload: 'errorLogin'
  }
}

function successSmsSend() {
  return {
    type: types.SUCCESS_SMS,
    payload: 'step1'
  }
}

function errorSmsSend() {
  return {
    type: types.ERROR_SMS,
    payload: 'step1'
  }
}

export function sendData(data) {
  return function thunkSendData(dispatch) {
    axios.post('url', data)
    .then(response => {
      dispatch(successLogin());
    })

    .catch(( ) => {
      dispatch(successLogin());
      // dispatch(errorLogin())
    })
  }
}

export function sendSmsData(sms) {
  return function thunkSensSms(dispatch) {
    axios.post('url', sms)
    .then(response => {
    dispatch(successSmsSend());
    })

    .catch(( ) => {
      dispatch(successSmsSend());
      // dispatch(errorSmsSend());
    })
  }
}

export function changeStage(stage) {
  return {
    type: types.CHANGE_STAGE,
    payload: stage,
  }
}