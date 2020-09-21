import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress } from '@material-ui/core';
import Video from './video';
import './index.scss';

const Videos = ({videos,isFetching}) => {

    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <div className='videos'>
                {videos.map(video => <Video video={video.key} key={video.id} name={video.name}/>)}    
            </div>}
        </>
    )

}

let mapStateToProps = (state) => ({
    videos: state.detail.videos,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(Videos);