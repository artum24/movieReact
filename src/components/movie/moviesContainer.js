import React, { useEffect } from 'react';
import Movies from './movies';
import {setMoviesThunk,searchMoviesThunk} from '../../redux/movie-reducer';
import {connect} from 'react-redux';
import {CircularProgress } from '@material-ui/core';

const MoviesContainer = ({searchMoviesThunk,setMoviesThunk,movies,genres,genre,sort,year,page,isFetching,search}) => {
    useEffect(() => {
        if(!search){
            setMoviesThunk(genre,sort,year,page)
            window.scrollTo(0,0)
        }else if(search.length > 0) {
            searchMoviesThunk(search,page)
            window.scrollTo(0,0)
        }
    },[setMoviesThunk,genre,sort,year,page,search,searchMoviesThunk])
    return (
        <>
            {(!isFetching) ? <Movies movies={movies} genres={genres} />: <CircularProgress/>}
        </>
    )
}
let mapStateToProps = (state) => ({
    movies: state.movie.movies,
    genres: state.navbar.genres,
    genre: state.movie.genre,
    sort: state.movie.sort,
    year: state.movie.year,
    page: state.movie.page,
    isFetching: state.movie.isFetching,
    search: state.movie.search,
})
export default connect(mapStateToProps,{setMoviesThunk,searchMoviesThunk})(MoviesContainer);