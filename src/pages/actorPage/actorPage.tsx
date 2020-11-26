import React, { useEffect } from 'react';

import { withRouter,RouteComponentProps  } from 'react-router-dom';

import {connect} from 'react-redux';
import {compose} from 'redux';
import { ActorImagesType, ActorType, MovieType } from '../../redux/types';
import { AppStateType } from '../../redux/store';
import {setActorDetailThunk} from '../../redux/actors-reducer';

import {withAuthRedirect} from '../../components/hoc/hoc';

import ActorDetail from './actorDetail';

import {CircularProgress } from '@material-ui/core';

type MapStateToPropsType = {
    isFetching: boolean,
    detail: ActorType,
    actorsMovie: Array<MovieType>,
    images: Array<ActorImagesType>
}

type MapDispatchToPropsType = {
    setActorDetailThunk: (id:number) => void,
}

type ActorPageContainerType = MapStateToPropsType & MapDispatchToPropsType;

const ActorPageContainer: React.FC<ActorPageContainerType & RouteComponentProps > = ({match,isFetching,detail,setActorDetailThunk,actorsMovie,images}) => {
    let id =match.url.slice(7);
    let newId = +id;
    useEffect(() => {
        setActorDetailThunk(newId)
    },[setActorDetailThunk, newId])
    return (
        <>
            {(!isFetching && detail!==null) ? <ActorDetail actor={detail} movie={actorsMovie} images={images} />: <div className='loader'><CircularProgress/></div> }
        </>
    )
}


let mapStateToProps = (state:AppStateType) => ({
    isFetching: state.actor.isFetching,
    detail: state.actor.detail,
    actorsMovie: state.actor.actorsMovie,
    images: state.actor.images
})

let ActorPageContainerWithRouter = withRouter(ActorPageContainer)

export default compose(
    connect(mapStateToProps,{setActorDetailThunk}),
    withAuthRedirect
)(ActorPageContainerWithRouter)