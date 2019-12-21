//now make in more simple and every condition devide in function

const state = {
  user: {},
  contact: [],
  mergeData: ""
};

const updateUser = (state, action) => {
  if (action.type == "UPDATE_USER") {
    return { ...state, ...action.payload };
  }

  return state;
};

const addContact = (state, action) => {
  if (action.type == "ADD_CONATACT") {
    return [...state, action.payload];
  }

  return state;
};

const reducer = (state, action) => ({
  user: updateUser(state.user, action),
  contact: addContact(state.contact, action)
});

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

const UPDATE_USER = "UPDATE_USER";
const ADD_CONTACT = "ADD_CONATACT";
const updatesUser = update => ({ type: UPDATE_USER, payload: update });
const updateConatact = update => ({ type: ADD_CONTACT, payload: update });
store.dispatch(updatesUser({ father: "hanif" }));
store.dispatch(updatesUser({ name: "Zeeshan" }));
store.dispatch(updateConatact({ Conatcts: "Zeeshan" }));
store.dispatch(updateConatact({ Conatct: "Zeeshan" }));

// console.log("store data", store.getState());

console.log("get Data", store.getState());
