import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({ cart: cartReducer });

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// import { legacy_createStore as createStore, combineReducers } from "redux";
// import cartReducer from "./cartReducer";

// const rootReducer = combineReducers({
//   cart: cartReducer,
// });

// export const store = createStore(rootReducer);
