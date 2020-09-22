import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress, Typography } from '@material-ui/core';
import Video from './video';
import './index.scss';

const Videos = ({videos,isFetching}) => {

    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <div className='videos'>
                {(videos.length === 0) ? <Typography variant='h6' className='errorFilm'>К сожилению трейлеров к даному фильму нету{':((('}</Typography>
                :videos.map(video => <Video video={video.key} key={video.id} name={video.name}/>)}    
            </div>}
        </>
    )

}

let mapStateToProps = (state) => ({
    videos: state.detail.videos,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(Videos);