import React from 'react';
import {Card,CardActionArea,Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import './index.scss';

const MovieItem = ({data,genres}) => {

  let url = (data.poster_path === null) ? 
  'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
  `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  
  const release = (data.release_date === undefined)? '':data.release_date.slice(0,4)

  return (
    <NavLink to={`/movie/${data.id}/actors`}>
      <Card className='card'>
        <CardActionArea>
          <img src={url} alt='a'className='media'/>
          <div className='title'>
            <Typography  variant="h6" >{data.title}</Typography>
          </div>
          <div className='genre'>
            <Typography variant='subtitle1'>Жанри: </Typography>
            {genres.map(item => (
              <div className='item' key={item}>
                <Typography variant='subtitle1'> {item}</Typography>
              </div>
            ))}
            </div>
              <div className='short'>
                <div className='release'>
                  <Typography variant='subtitle1'>{release} г.</Typography>
                </div>
                <div className='vote'>
                  <Rating name='read-only' precision={0.1} defaultValue={2.5} value={data.vote_average/2} readOnly/>
                </div>
            </div>
        </CardActionArea>
      </Card>
    </NavLink>
    )
}

export default MovieItem;