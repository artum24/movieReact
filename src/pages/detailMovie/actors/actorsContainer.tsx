import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress } from '@material-ui/core';
import Actor from './actor';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ActorType } from '../../../redux/types';
import { AppStateType } from '../../../redux/store';

type ActorsType = {
    actors: Array<ActorType>,
    isFetching: boolean
}

const Actors:React.FC<ActorsType> = ({actors,isFetching}) => {
    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <ScrollPanel style={{width:'100%', height:'300px'}} className="custom">
                <div className='w-4/5 flex flex-wrap justify-around ml-auto mr-auto'>
                    {actors.map(actor => (
                        <Actor actor={actor} key={actor.id}/>))}
                </div>
            </ScrollPanel>}
        </>
    )

}

let mapStateToProps = (state:AppStateType):ActorsType => ({
    actors: state.detail.actors,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(Actors);