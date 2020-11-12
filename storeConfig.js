import { createStore, combineReducers, applyMiddleware } from "redux";
import FeedReducer from "./src/redux/FeedReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  feedReducer: FeedReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
