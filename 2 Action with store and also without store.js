//Action is used to update state
//Action return object etc payload action type with update parameter

//if we need more than one reducer so we need Action
// Without Store
const merge = (prev, next) => ({ ...prev, ...next });
const state = {
  user: {},
  contact: [],
  mergeData: ""
};

console.log("satat log", state.contact);
const updateUser = (state, update) => merge(state, update);

const addContact = (state, addContact) => [...state, addContact];

const reducer = (state, action) => {
  //this is update action when you need to update data
  if (action.type == "UPDATE_USER") {
    //Using Function
    // return merge(state, { user: updateUser(state, action.payload) });

    // Without Using Function
    return { ...state, ...{ user: { ...state.user, ...action.payload } } };
  }
  console.log("arraysss", state.contact);
  //   this is add data when data comes in array and push in to reducer
  if (action.type == "ADD_CONTACT") {
    //with using function
    // return {
    //   ...state,
    //   ...{ contact: addContact(state.contact, action.payload) }
    // };

    // without function

    return {
      ...state,
      ...{ contact: [...state.contact, action.payload] }
    };
  }

  return state;
};

// const r = reducer(state, {
//   type: "UPDATE_USER",
//   payload: { user: { name: "Zeeshan" } }
// });

// const addContac = reducer(state, { type: "ADD_CONTACT", payload: "0346" });

// console.log("console of reducer of user", r);
// console.log("Console of contact", addContac);

// With Store

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(update) {
    this.state = reducer(this.state, update);
  }
}

const store = new Store(reducer, state);

// direct pass object didnot create anay action
// store.dispatch({
//   type: "UPDATE_USER",
//   payload: { name: "Seeshan" }
// });

// store.dispatch({
//   type: "ADD_CONTACT",
//   payload: { Contact: [12323] }
// });

//Create Action
const UPDATE_USER = "UPDATE_USER";
const ADD_CONTACT = "ADD_CONTACT";
const updatesUser = update => ({ type: UPDATE_USER, payload: update });
const updateConatact = update => ({ type: ADD_CONTACT, payload: update });
store.dispatch(updatesUser({ father: "hanif" }));
store.dispatch(updatesUser({ name: "Zeeshan" }));
store.dispatch(updateConatact({ Conatcts: "Zeeshan" }));
store.dispatch(updateConatact({ Conatct: "Zeeshan" }));

console.log("store data", store.getState());

console.log("get Data", store.getState());
