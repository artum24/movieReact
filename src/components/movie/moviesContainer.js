import React, { useEffect } from 'react';
import Movies from './movies';
import {setMoviesThunk,searchMoviesThunk,setTabThunk} from '../../redux/movie-reducer';
import {connect} from 'react-redux';
import {CircularProgress } from '@material-ui/core';

const MoviesContainer = ({setTabThunk,searchMoviesThunk,setMoviesThunk,movies,genres,genre,sort,year,page,isFetching,search,tab}) => {
    useEffect(() => {
        if(!search){
            setMoviesThunk(genre,sort,year,page)
            window.scrollTo(0,0)
        }else if(search.length > 0) {
            searchMoviesThunk(search,page)
            window.scrollTo(0,0)
        } if (tab !== '') {
            setTabThunk(tab, page)
            window.scrollTo(0,0)
        }
    },[setTabThunk,setMoviesThunk,genre,sort,year,page,search,searchMoviesThunk,tab])
    return (
        <>
            {(!isFetching) ? <Movies movies={movies} genres={genres} />: <div className='loader'><CircularProgress/></div>}
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
    tab: state.movie.tab
})
export default connect(mapStateToProps,{setMoviesThunk,searchMoviesThunk,setTabThunk})(MoviesContainer);