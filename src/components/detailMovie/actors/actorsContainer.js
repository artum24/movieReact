import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress } from '@material-ui/core';
import Actor from './actor';
import { ScrollPanel } from 'primereact/scrollpanel';

const Actors = ({actors,isFetching}) => {
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

let mapStateToProps = (state) => ({
    actors: state.detail.actors,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(Actors);