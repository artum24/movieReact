import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress } from '@material-ui/core';
import Actor from './actor';

import './index.scss';

const Actors = ({actors,isFetching}) => {
    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <div className='actors'>
                {actors.map(actor => (
                    <Actor actor={actor} key={actor.id}/>))}
            </div>}
        </>
    )

}

let mapStateToProps = (state) => ({
    actors: state.detail.actors,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(Actors);