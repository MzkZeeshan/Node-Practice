const { UPDATE_USER, ADD_CONTACT } = require("./Action");

const updateUser = (state = {}, action) => {
  if (action.type == UPDATE_USER) {
    return { ...state, ...action.payload };
  }

  return state;
};

const addContact = (state = [], action) => {
  if (action.type == ADD_CONTACT) {
    return [...state, action.payload];
  }

  return state;
};

const reducer = combineReducers({
  user: updateUser,
  constact: addContact
});
export default reducer;
