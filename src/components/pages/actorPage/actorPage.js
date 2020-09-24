import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {CircularProgress } from '@material-ui/core';
import ActorDetail from './actorDetail';
import {setActorDetailThunk} from '../../../redux/actors-reducer';
import {withAuthRedirect} from '../../hoc/hoc';
import {compose} from 'redux';
const ActorPageContainer = ({match,isFetching,detail,setActorDetailThunk,actorsMovie}) => {
    const id =match.url.slice(7);
    useEffect(() => {
        setActorDetailThunk(id)
        console.log('actor')
    },[setActorDetailThunk, id])
    return (
        <>
            {(!isFetching) ? <ActorDetail actor={detail} movie={actorsMovie}/>: <CircularProgress/> }
        </>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.actor.isFetching,
    detail: state.actor.detail,
    actorsMovie: state.actor.actorsMovie
})
let ActorPageContainerWithRouter = withRouter(ActorPageContainer)
export default compose(
    connect(mapStateToProps,{setActorDetailThunk}),
    withAuthRedirect
)(ActorPageContainerWithRouter)