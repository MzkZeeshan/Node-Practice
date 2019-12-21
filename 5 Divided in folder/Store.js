//now delete store we are using createStore

const { createStore } = require("redux");
const reducer = require("./Reducer");

//here we give only reduceer and initial state in reducer parameter is []
const store = createStore(reducer);

export default store;

// const { action } = require("./Action");

// store.dispatch(action.updatesUser({ father: "hanif" }));
// store.dispatch(action.updatesUser({ name: "Zeeshan" }));
// store.dispatch(action.updateConatact({ Conatcts: "Zeeshan" }));
// store.dispatch(action.updateConatact({ Conatct: "Zeeshan" }));

// // console.log("store data", store.getState());

// console.log("get Data", store.getState());
