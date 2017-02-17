import axios from 'axios';
import * as types from 'constants/actionTypes';

function setBanks(data) {
  return {
    type: types.SET_BANKS,
    payload: data,
  };
}

export function fetchBanks() {
  return function thunkFetch(dispatch) {
    axios.get('./banks.json').then(response => {
      dispatch(setBanks(response.data));
    });
  };
}

export function sendData(data, stage) {
  return function thunkFetch(dispatch) {
    axios.post('url', data)
    .then(response => {
      dispatch(changeStage(stage))
    })
    .catch(( ) => {
      dispatch(changeStage(stage))
    })
  }
}

export function changeStage(stage) {
  return {
    type: types.CHANGE_STAGE,
    payload: stage,
  }
}