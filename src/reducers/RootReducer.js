import { combineReducers } from "redux";
import { PostsReducer } from "./PostsReducer";

export const RootReducer = combineReducers({
    posts: PostsReducer
})

export default RootReducer
