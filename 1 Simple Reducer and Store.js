console.log("Reducer Practice in Javascript");
// Redeucer is used to update state

// Old way of merge
const merge = (prev, next) => Object.assign({}, prev, next);
// New way of merge
const reducer = (state, update) => ({ ...state, ...update });

// const reducer = (state, update) => merge(state, update);

let state = {};
state = reducer(state, { foo: "roo" });
state = reducer(state, { zoo: "foo" });
state = reducer(state, { koo: "goo" });

console.log("state+++", state);

// Store it used to maintain state
class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }
  // for only getting state
  getState() {
    return this.state;
  }
  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}
//here we are giving initial state but initial state is always = {}
//additionally we are adding reducer which is on top
// const store = new Store(reducer, { foo: "foo" });

//if i didnot want to give any initial state so we can  also give this way this is shortcut way

const store = new Store(reducer);

console.log("initial state", store.getState());

store.dispatch({ name: "zeeeshan" });
store.dispatch({ last: "khan" });
store.dispatch({ qualification: "inter" });

console.log("get state", store.getState());
