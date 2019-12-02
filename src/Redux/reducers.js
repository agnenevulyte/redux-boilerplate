import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  appState: appStateReducer,
  login: loginReducer
});

export default rootReducer;
