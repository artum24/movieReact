import React from 'react';
import {NavLink} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

const ItemMovie = ({movie}) => {

  let url = (movie.poster_path === null) ? 
  'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
  `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  const release = (movie.release_date === undefined)? '':movie.release_date.slice(0,4)

  return (
    <NavLink to={`/movie/${movie.id}/actors`} className='mt-8 bg-white rounded overflow-hidden ml-8 shadow-md ml-0 w-64'>
      <img src={url} alt='a'className='w-auto'/>
      <p className='h-15'>{movie.title}</p>
      <div className='flex justify-between'>
        <p>{release} г.</p>
        <Rating name='read-only' precision={0.1} defaultValue={2.5} value={movie.vote_average/2} readOnly/>
      </div>
    </NavLink>
    )
}

export default ItemMovie;



// poster_path
// release_date
// vote_average
// id