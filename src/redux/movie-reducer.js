import {MovieApi} from '../components/api/api';

let initialState = {
    movies: [],
    genre:'',
    sort:'popularity.desc',
    year:2020,
    page:1,
    isFetching: true,
    total_results:0,
    search:''
}

const movieReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_MOVIES': {
            return {
                ...state,
                movies: action.payload,
            }
        }
        case 'SET_SEARCH_SET': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'CHANGE_PAGE': {
            return {
                ...state,
                page:action.payload
            }
        }
        case 'ISFETCHING_CHANGE': {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case 'SET_TOTAL_RESULTS': {
            return {
                ...state,
                total_results: action.payload
            }
        }
        case 'SET_SEARCH': {
            return {
                ...state,
                search: action.payload
            }
        }
        default: 
        return state;
    }
}

export const setMovie = (movies) => ({
    type:'SET_MOVIES',
    payload: movies
})
export const setSearchSet = (genre,sort,year) => ({
    type:'SET_SEARCH_SET',
    payload: {genre,sort,year}
})
export const changePage = (page) => ({
    type: 'CHANGE_PAGE',
    payload: page
})
export const isFetchingChange = (bool) => ({
    type:'ISFETCHING_CHANGE',
    payload: bool
});
export const setTotalResults = (total) => ({
    type:'SET_TOTAL_RESULTS',
    payload: total
})
export const setSearchPanel = (searchText) => ({
    type:'SET_SEARCH',
    payload:searchText
})
export const setMoviesThunk = (genre,sort,year,page) => async (dispatch) => {
    dispatch(isFetchingChange(true))
    let responce = await MovieApi.getMovies(genre,sort,year,page)
    if(responce.status === 200) {
        dispatch(setMovie(responce.data.results))
        dispatch(setTotalResults(responce.data.total_results))
        dispatch(isFetchingChange(false))
    }
}

export const searchMoviesThunk = (query,page) => async (dispatch) => {
    dispatch(isFetchingChange(true))
    let responce = await MovieApi.search(query,page);
    if (responce.status === 200) {
        dispatch(setMovie(responce.data.results))
        dispatch(setTotalResults(responce.data.total_results))
        dispatch(isFetchingChange(false))
    }
}

export default movieReducer;