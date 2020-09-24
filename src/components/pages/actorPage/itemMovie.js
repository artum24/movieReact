import React from 'react';
import {Card,CardActionArea} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import './index.scss';

const ItemMovie = ({movie}) => {

  let url = (movie.poster_path === null) ? 
  'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
  `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  const release = (movie.release_date === undefined)? '':movie.release_date.slice(0,4)

  return (
    <NavLink to={`/movie/${movie.id}/actors`}>
      <Card className='card'>
        <CardActionArea>
          <img src={url} alt='a'className='media'/>
          <div className='title'>
            <p>{movie.title}</p>
          </div>
          <div className='short'>
            <div className='release'>
              <p>{release} г.</p>
            </div>
            <div className='vote'>
              <Rating name='read-only' precision={0.1} defaultValue={2.5} value={movie.vote_average/2} readOnly/>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </NavLink>
    )
}

export default ItemMovie;



// poster_path
// release_date
// vote_average
// id