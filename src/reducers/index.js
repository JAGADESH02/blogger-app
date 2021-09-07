import {combineReducers} from "redux";
import getPostDataReducer from './getPostDataReducer';
import changeTabsDataReducer from './changeTabsDataReducer';
import likePostDataReducer from './likePostDataReducer';
import archivePostDataReducer from './archivePostDataReducer';
import addPostDataReducer from './addPostDataReducer';
export default combineReducers({
    postData:getPostDataReducer,
    tabValue:changeTabsDataReducer,
    likePost:likePostDataReducer,
    archivePost:archivePostDataReducer,
    postAdd:addPostDataReducer
})