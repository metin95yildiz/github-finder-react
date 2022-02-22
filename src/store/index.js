import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {
    searchUser
} from "./sagas";
import * as reducers from "./reducers";

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(searchUser);
    return store;
}

export default store;