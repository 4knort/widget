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