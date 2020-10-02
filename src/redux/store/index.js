import {createStore, combineReducers} from "redux";
import {postsReducer} from "../reducers/postsReducer";
import {authorsReducer} from "../reducers/authorsReducer";

const store = createStore(combineReducers({
    posts: postsReducer,
    authors: authorsReducer
}));

export default store;