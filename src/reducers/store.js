import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./index";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'Post',
  storage: storage,
  whitelist: ['postAdd','likePost','archivePost'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, composeEnhancer(middleware));
const persistor = persistStore(store);
export { persistor, store };


