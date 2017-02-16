import * as types from 'constants/actionTypes';

const initialState = {
  stage: "selectBank",
  banks: [],
  fields: [
    {
      name: "login", 
      english_name: "Login", 
      localized_name: "Login", 
      nature: "text", 
      position: 1,
    },
    {
      name: "Password", 
      english_name: "Password", 
      localized_name: "Password", 
      nature: "password", 
      position: 2,
    },
    // {
    //   name: "select", 
    //   english_name: "select", 
    //   localized_name: "select", 
    //   nature: "select",
    //   field_options: [
    //     {name: "1", english_name: "Item 1", localized_name: "Item 1", option_value: "1", selected: false},
    //     {name: "2", english_name: "Item 2", localized_name: "Item 2", option_value: "2", selected: false},
    //     {name: "3", english_name: "Item 3", localized_name: "Item 3", option_value: "3", selected: false},
    //   ], 
    //   position: 3,
    // },
  ]
};

export default function dataReducer(state = initialState, action) {
  switch(action.type) {
    case types.SET_BANKS: {
      return {
      ...state,
      banks: action.payload.slice(0),
      }
    }
    default: {
      return state;
    }
  }
}