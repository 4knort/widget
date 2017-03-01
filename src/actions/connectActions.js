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

export function sendData(data) {
  return function thunkSendData(dispatch) {
    axios.post('url', data)
    .then(response => {
      dispatch(processingResponse(response));
    })

    .catch(( ) => {
      dispatch(processingResponse(response));
    })
  }
}

export function sendInteractiveData(data) {
  return function thunkSendData(dispatch) {
    axios.post('url', data)
    .then(response => {
      dispatch(processingResponse(response));
    })

    .catch(( ) => {
      dispatch(processingResponse(response));
    })
  }
}

export function successFinish() {
  return {
    type: types.SUCCESS_FINISH,
    payload: "selectBank",
  }
}

function processingResponse(data) {
  return {
    type: types.PROCESSING_RESPONSE,
    payload: data,
  }
}

export function checkStatus() {
  return function thunkcheckStatus(dispatch) {
    axios.get('url')
    .catch(response => {
      dispatch(processingResponse(response));
    })
  }
}