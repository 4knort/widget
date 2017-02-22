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
  return function thunkSendSms(dispatch) {
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

function renderInteractiveElements(data) {
  return {
    type: types.INTERACTIVE_ELEMENTS,
    payload: {
      elements: data.interactive_fields_names,
      html: data.html,
      stage: "interactiveScreen",
    }
  }
}

export function checkStatus() {
  return function thunkcheckStatus(dispatch) {
    axios.post('url')
    .then(response => {
      if(response.interactive_fields_names) {        
      dispatch(renderInteractiveElements(response));
      } else {
        dispatch(changeStage(response.stage));
      }
    })

    .catch(( ) => {
      dispatch(renderInteractiveElements({
        interactive_fields_names: ["captcha"],
        html: '<div id="saltedge-interactive" class="saltedge-image"> <img src="https://robber-staging.s3-eu-west-1.amazonaws.com/35db37c3-78c7-4045-9c66-f567f6616d40.png"> </div>',
      }))
      // if(response.interactive_fields_names) {        
      // dispatch(renderInteractiveElements(response));
      // } else {
      //   dispatch(changeStage(response.stage));
      // }
    })
  }
}

export function changeStage(stage) {
  return {
    type: types.CHANGE_STAGE,
    payload: stage,
  }
}