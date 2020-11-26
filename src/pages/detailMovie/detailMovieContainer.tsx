import React, { useEffect } from 'react';

import { withRouter,RouteComponentProps } from 'react-router-dom';

import {connect} from 'react-redux';
import {compose} from 'redux';
import { AppStateType } from '../../redux/store';
import { DetailMovieType } from '../../redux/types';
import {setMovieThunk} from '../../redux/detail-reducer';

import DetailMovie from './detailMovie';
import {withAuthRedirect} from '../../components/hoc/hoc';

import {CircularProgress } from '@material-ui/core';

type MapStateToPropsType = {
    movie: DetailMovieType | null,
    isFetching: boolean
}

type MapDispatchToPropsType = {
    setMovieThunk: (id:number) => void
}

type DetailMovieContainerType = MapStateToPropsType & MapDispatchToPropsType;

const DetailMovieContainer:React.FC<DetailMovieContainerType & RouteComponentProps> = ({movie,match,setMovieThunk,isFetching}) => {
    
    const id =match.url.slice(7);
    const idActor = id.substr(0, id.length - 7)
    const newId = +idActor;
    
    useEffect(() => {
        setMovieThunk(newId)
    },[setMovieThunk,newId])

    return (
        <>
            {(!isFetching) ? <DetailMovie movie={movie}/>: <div className='loader'><CircularProgress /></div> }
        </>
    )

}


let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    movie: state.detail.movie,
    isFetching: state.detail.isFetching,
})

let DetailMovieContainerWithRouter = withRouter(DetailMovieContainer)

export default compose(
    connect(mapStateToProps,{setMovieThunk}),
    withAuthRedirect
)(DetailMovieContainerWithRouter)