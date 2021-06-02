export const ADD_CLIENT = 'ADD_CLIENT';

export const addClient = (payload = {}) => ({
  type: ADD_CLIENT,
  payload,
});
