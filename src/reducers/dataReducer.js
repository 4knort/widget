import * as types from 'constants/actionTypes';

const initialState = {
  stage: "selectBank",
  users: [],
  inputFields: [
    {
      name: "login", 
      english_name: "Login", 
      localized_name: "Login", 
      nature: "text", 
      position: 1,
    },
    {
      name: "password", 
      english_name: "password", 
      localized_name: "password", 
      nature: "password", 
      position: 2,
    },
    {
      name: "select", 
      english_name: "select", 
      localized_name: "select", 
      nature: "select",
      field_options: [
        {name: "1", english_name: "Item 1", localized_name: "Item 1", option_value: "1", selected: false},
        {name: "2", english_name: "Item 2", localized_name: "Item 2", option_value: "2", selected: false},
        {name: "3", english_name: "Item 3", localized_name: "Item 3", option_value: "3", selected: false},
      ], 
      position: 3,
    },
  ],
  inputFieldsSms: [
    {
      name: "sms", 
      english_name: "sms", 
      localized_name: "sms", 
      nature: "text", 
      position: 1,
    },
  ]
};

export default function dataReducer(state = initialState, action) {
  switch(action.type) {
    case types.SET_USERS: {
      return {
      ...state,
      users: action.payload.slice(0),
      }
    }
    case types.SUCCESS_LOGIN: {
      return {
      ...state,
      stage: action.payload,
      }
    }
    case types.SUCCESS_SMS: {
      return {
      ...state,
      stage: action.payload,
      }
    }
    case types.ERROR_SMS: {
      return {
      ...state,
      stage: action.payload,
      }
    }
    case types.ERROR_LOGIN: {
      return {
      ...state,
      stage: action.payload,
      }
    }
    case types.CHANGE_STAGE: {
      return {
      ...state,
      stage: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}