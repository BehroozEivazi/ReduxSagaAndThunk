// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import createSagaMiddleware from "redux-saga";
// import mySaga from "./Saga";

// const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistReducer = persistReducer(persistConfig, reducers);

// export const store = createStore(
//   persistReducer,
//   applyMiddleware(sagaMiddleware)
// );
// export const persistor = persistStore(store);

// sagaMiddleware.run(mySaga);

// import { applyMiddleware, createStore } from "redux";
// import combineReducers from "./reducers";
// import logger from "redux-logger";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import createSagaMiddleware from "redux-saga";
// import thunk from "redux-thunk";
// const persistConfig = {
//   key: "root",
//   storage,
//   //   blacklist: ["productState"],
// };
// const persistedReducer = persistReducer(persistConfig, combineReducers);
// // export const store = createStore(
// //   persistedReducer,
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // );
// export const store = createStore(
//   persistedReducer,
//   applyMiddleware(thunk, logger)
// );
// export const persistor = persistStore(store);

// // const store = createStore(combineReducers);

// // export default store;
