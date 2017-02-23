import axios from 'axios';
import * as types from 'constants/actionTypes';

// export function checkStatus() {
//   return function thunkcheckStatus(dispatch) {
//     axios.get('url')
//     .then(response => {
//       if (response.interactive_fields_names.length || response.html) {        
//       dispatch(renderInteractiveElements(response));
//       } else if (reposnse.fail_message) {
//         dispatch(something);
//       } else {
//         dispatch(changeStage(response.stage));
//       }
//     })

//     .catch(( ) => {
//       dispatch(renderInteractiveElements({
//         interactive_fields_names: ["captcha"],
//         html: '<div id="saltedge-interactive" class="saltedge-image"> <img src="https://robber-staging.s3-eu-west-1.amazonaws.com/35db37c3-78c7-4045-9c66-f567f6616d40.png"> </div>',
//       }))
//       // if(response.interactive_fields_names) {        
//       // dispatch(renderInteractiveElements(response));
//       // } else {
//       //   dispatch(changeStage(response.stage));
//       // }
//     })
//   }
// }

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

function successInteractiveDataSend() {
  return {
    type: types.SUCCESS_INTERACTIVE,
    payload: 'connecting'
  }
}

export function sendData(data) {
  return function thunkSendData(dispatch) {
    axios.post('url', data)
    .then(response => {
      dispatch(connect());
    })

    .catch(( ) => {
      dispatch(connect());
      // dispatch(errorLogin())
    })
  }
}

export function sendInteractiveData(data) {
  return function thunkSendSms(dispatch) {
    axios.post('url', data)
    .then(response => {
    dispatch(successInteractiveDataSend());
    })

    .catch(( ) => {
      dispatch(successInteractiveDataSend());
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

export function fetchAccounts() {
  return {
    type: types.FETCH_ACCOUNTS,
    payload: "fetchAccounts",
  }
}

export function fetchRecent() {
  return {
    type: types.FETCH_RECENT,
    payload: "fetchRecent",
  }
}

export function successFinish() {
  return {
    type: types.SUCCESSFINISH,
    payload: "selectBank",
  }
}

function connect() {
  return {
    type: types.CONNECTING,
    payload: 'connecting',
  }
}
function error(data) {
  return {
    type: types.ERROR,
    payload: {
      failMessage: data.fail_message,
      stage: 'error',
    },
  }
}

export function checkStatus() {
  return function thunkcheckStatus(dispatch) {
    axios.get('url')
    .catch(response => {
      if(response.status === "active") {
        dispatch(finish());
        return
      }

      // const { stage }  = response;
      const stage = 'finish';

      switch(stage) {
        case "interactive": {
          dispatch(renderInteractiveElements({
            interactive_fields_names: ["captcha"],
            html: '<div id="saltedge-interactive" class="saltedge-image"> <img src="https://robber-staging.s3-eu-west-1.amazonaws.com/35db37c3-78c7-4045-9c66-f567f6616d40.png"> </div>',
          }))
          break;
        }
        case "fetch_accounts": {
          dispatch(fetchAccounts())
          break;
        }
        case "fetch_recent": {
          dispatch(fetchRecent())
          break;
        }
        case "finish": {
          dispatch(error({
            fail_message: 'ERROR',
          }))
          break;
        }
        default: {
          dispatch(connect());
        }
      }
    })
  }
}