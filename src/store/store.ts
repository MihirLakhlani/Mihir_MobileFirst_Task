import { createStore, combineReducers, applyMiddleware, AnyAction, Dispatch } from 'redux';
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';
import jokesReducer from './reducers/jokesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  jokes: jokesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware));

export default store;
