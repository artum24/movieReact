import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {setMovieThunk} from '../../redux/detail-reducer';
import DetailMovie from './detailMovie';
import {CircularProgress } from '@material-ui/core';

const DetailMovieContainer = ({movie,match,setMovieThunk,isFetching}) => {
    const id =match.url.slice(7);
    const idActor = id.substr(0, id.length - 7)
    useEffect(() => {
        setMovieThunk(idActor)
        console.log('movie')
    },[setMovieThunk,idActor])

    return (
        <>
            {(!isFetching) ? <DetailMovie movie={movie}/>: <CircularProgress/> }
        </>
    )
}

let mapStateToProps = (state) => ({
    movie: state.detail.movie,
    isFetching: state.detail.isFetching
})
let DetailMovieContainerWithRouter = withRouter(DetailMovieContainer)
export default connect(mapStateToProps,{setMovieThunk})(DetailMovieContainerWithRouter)