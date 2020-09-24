import React from 'react';
import { Typography} from '@material-ui/core';
import ItemMovie from './itemMovie';
import './index.scss';

const ActorDetail = ({actor,movie,images}) => {
    let bio = (actor.biography.length > 500) ? actor.biography.slice(0,500)+'...' : actor.biography;
    let url = (actor.profile_path === null) ? 
    'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <div className='detailMovie'>
            <div className='container'>
                <div className='media-item'>
                    <div className="img">
                        <img src={url} alt='sasa' className='detailPoster'/>
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
            <div className='images'>
                        {images.map( item =>  <img key={item.file_path} alt='assa' src={`https://image.tmdb.org/t/p/w500${item.file_path}`} className='smallImage'/>)}
                    </div>
            <div className='overvieww'>
                <Typography variant='subtitle1'>{bio}</Typography>
            </div>
            <div className='listMovie'>
                <Typography variant='h6' className='info-actor'>АКТЕР В</Typography>
                {movie.map(item => <ItemMovie key={item.id} movie={item}/>)}
            </div>
        </div>
    )
}

export default ActorDetail;
