import { Typography } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player';

type VideoTypee = {
    video: string,
    name: string
}

const Video:React.FC<VideoTypee> = ({video, name}) => {
    console.log(video, ' ', name)
    return (
        <div className='video'>
            <ReactPlayer controls width='360px' height='180px' url={`https://www.youtube.com/watch?v=${video}`}/>
            <Typography variant='h6'>{name}</Typography>
        </div>
    )
}

export default Video;