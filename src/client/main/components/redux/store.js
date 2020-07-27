import { createStore} from "redux";
import {rootReducer} from "./rootReducer";
import React from 'react';

// export const store = createStore(rootReducer, 1, applyMiddleware(thunk)) for async
export const storeForAviary = createStore(rootReducer, 1)