import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import navbarReducer from './navbar/reducer';
import movieReducer from './movie/reducer';
import DetailMovieReducer from './detail/reducer';
import AuthReducer from './auth/reducer';
import DetailActorReducer from './actors/reducer';

let rootReducer  = combineReducers({
    form: formReducer,
    navbar: navbarReducer,
    movie: movieReducer,
    detail:DetailMovieReducer,
    auth:AuthReducer,
    actor: DetailActorReducer
})

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;

export default store;