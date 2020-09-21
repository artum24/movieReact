import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import navbarReducer from './navbar-reducer';
import movieReducer from './movie-reducer';
import DetailMovieReducer from './detail-reducer';
let reducers = combineReducers({
    form: formReducer,
    navbar: navbarReducer,
    movie: movieReducer,
    detail:DetailMovieReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;