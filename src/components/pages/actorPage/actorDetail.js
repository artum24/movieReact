import React from 'react';
import { Typography} from '@material-ui/core';
import ItemMovie from './itemMovie';
import Gallery from './Gallery';
import { ScrollPanel } from 'primereact/scrollpanel';

import './index.scss';

const ActorDetail = ({actor,movie,images}) => {
    let bio = (actor.biography.length > 500) ? actor.biography.slice(0,500)+'...' : actor.biography;
    let imgArr = [];
    for (let i = 0; i < images.length; i++) {
        imgArr.push({url:`https://image.tmdb.org/t/p/w500${images[i].file_path}`, alt:'asas'})
    }
    return (
        <div className='detailMoviee'>
            <div className='container'>
                <div className='media-item'>
                    <div className="img">
                        {(imgArr.length < 3) ?<img src={imgArr[0].url} alt='sasa' className='detailPoster'/> : <Gallery images={imgArr}/>}
                    </div>
                </div>
                <div className='info'>
                    <div className='name'>
                        <Typography variant='h4'>{actor.name}</Typography>
                    </div>
                    <div className='birthday'>
                        <Typography variant='subtitle1'><span className='titleSet'>Дата рождения:</span>{actor.birthday}</Typography>
                    </div>
                    <div className='place'>
                        <Typography variant='subtitle1'><span className='titleSet'>Место рождения:</span>{actor.place_of_birth}</Typography>
                    </div>
                    <Typography variant='subtitle1' className='knowHow'><span className='titleSet'>Знают как:</span>
                        {actor.also_known_as.map(know => {
                            return (
                                <div className='item' key={know}>
                                    <Typography variant='subtitle1'> {know}{', '}</Typography>
                                </div>
                            )
                        })}
                    </Typography>
                </div>
            </div>
            <div className='overvieww'>
                <Typography variant='subtitle1'>{bio}</Typography>
            </div>
            <Typography variant='h6' className='info-actor'>АКТЕР В</Typography>
            <ScrollPanel style={{width:'100%', height:'300px'}} className="custom">
                <div className='recomends'>
                    {movie.map(item => <ItemMovie key={item.id} movie={item}/>)}
                </div>
            </ScrollPanel>
        </div>
    )
}

export default ActorDetail;
