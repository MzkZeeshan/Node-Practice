//here we add createStore and delete homemade store

export const UPDATE_USER = "UPDATE_USER";
export const ADD_CONTACT = "ADD_CONTACT";
export const updatesUser = update => ({ type: UPDATE_USER, payload: update });
export const updateConatact = update => ({
  type: ADD_CONTACT,
  payload: update
});
