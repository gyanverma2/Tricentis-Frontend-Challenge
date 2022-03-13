import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import tdata from "./slices/tdata";

const rootReducer = combineReducers({ counter,tdata });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
