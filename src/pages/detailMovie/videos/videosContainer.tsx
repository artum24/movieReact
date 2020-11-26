import React from 'react';

import {connect} from 'react-redux';
import { AppStateType } from '../../../redux/store';
import {VideoType} from '../../../redux/types';

import Video from './video';

import {CircularProgress, Typography } from '@material-ui/core';

type VideosTypee = {
    videos: Array<VideoType>,
    isFetching: boolean
}

const Videos:React.FC<VideosTypee> = ({videos,isFetching}) => {

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

let mapStateToProps = (state:AppStateType) => ({
    videos: state.detail.videos,
    isFetching: state.detail.isFetching
})

export default connect(mapStateToProps)(Videos);