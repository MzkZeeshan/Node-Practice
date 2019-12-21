//now delete store we are using createStore

const { combineReducers, createStore } = require("redux");

const state = {
  user: {},
  contact: [],
  mergeData: ""
};

const updateUser = (state = {}, action) => {
  if (action.type == "UPDATE_USER") {
    return { ...state, ...action.payload };
  }

  return state;
};

const addContact = (state = [], action) => {
  if (action.type == "ADD_CONTACT") {
    return [...state, action.payload];
  }

  return state;
};

// Now here add combineReducer
// const reducer = (state, action) => ({
//   user: updateUser(state.user, action),
//   contact: addContact(state.contact, action)
// });

const reducer = combineReducers({
  user: updateUser,
  constact: addContact
});

//here we add createStore and delete homemade store
const store = createStore(reducer, state);

const UPDATE_USER = "UPDATE_USER";
const ADD_CONTACT = "ADD_CONTACT";
const updatesUser = update => ({ type: UPDATE_USER, payload: update });
const updateConatact = update => ({ type: ADD_CONTACT, payload: update });
store.dispatch(updatesUser({ father: "hanif" }));
store.dispatch(updatesUser({ name: "Zeeshan" }));
store.dispatch(updateConatact({ Conatcts: "Zeeshan" }));
store.dispatch(updateConatact({ Conatct: "Zeeshan" }));

// console.log("store data", store.getState());

console.log("get Data", store.getState());
