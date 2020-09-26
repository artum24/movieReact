import React from 'react';
import {Card,CardActionArea} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import './index.scss';

const RecomendMovie = ({title,url,vote_average,release_date, id}) => {
    let Img = (url === null) ? 
    'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${url}`;
    const release = release_date.slice(0,4);
    return (
        <NavLink to={`/movie/${id}/actors`}>
            <Card className='recomend'>
                <CardActionArea>
                    <img src={Img} alt='a'className='media'/>
                    <div className='title'>
                        <p className='title'>{title}</p>
                    </div>
                    <div className='short'>
                        <div className='release'>
                            <p>{release} г.</p>
                        </div>
                        <div className='vote'>
                            <Rating name='read-only' precision={0.1} defaultValue={2.5} value={vote_average/2} readOnly/>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
      </NavLink>
    )
}

export default RecomendMovie;

