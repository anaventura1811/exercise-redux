import { ADD_CLIENT } from '../actions';

const initialState = {
    listClient: [],
  }
  
  function clientsReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_CLIENT:
        return { ...state, listClient: state.listClient.concat(action.payload) };
      default:
        return state;
    }
  }

  export default clientsReducer;
