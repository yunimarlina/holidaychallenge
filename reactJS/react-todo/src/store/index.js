
import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk'

const initialState = {
  todos: []
}
function reducer(state = initialState,action){
  switch (action.type) {
    case "SET_TODO":
      return { ...state, todos: action.payload}
    default:
     return state
  }

}

const store = createStore(reducer, applyMiddleware(thunk))

export default store