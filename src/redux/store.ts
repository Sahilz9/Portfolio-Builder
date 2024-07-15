import { solidReducer } from "./theme/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { logger } from "redux-logger";

const rootReducer = combineReducers({
  solidColorTheme: solidReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(logger));
