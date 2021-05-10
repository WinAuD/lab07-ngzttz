import { createStore } from "redux";
import fontSizeReducer from "./reducer.js";

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// const store = createStore(fontSizeReducer);

const store = createStore(fontSizeReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;
