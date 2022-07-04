import { combineReducers, legacy_createStore } from "redux";
import { cityReducer } from "./reducer";

const rootReducer = combineReducers({
  data: cityReducer,
});

const store = legacy_createStore(rootReducer);

console.log(store.getState());

export default store;