import React from 'react';
import {NavLink} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

const MovieItem = ({data,genres,windowWidth}) => {
  if(windowWidth <=405) {
    if (genres.length > 3) {
      genres = genres.slice(0,3)
    }
  } else if (windowWidth> 405 && windowWidth < 768) {
    if (genres.length > 4) {
      genres = genres.slice(0,4)
    }
  }
  let url = (data.poster_path === null) ? 
  'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
  `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  
  const release = (data.release_date === undefined)? '':data.release_date.slice(0,4)

  return (
    <NavLink to={`/movie/${data.id}/actors`} className='mt-8 bg-white rounded overflow-hidden ml-8 shadow-md ml-0 w-64'>
        <img src={url} alt='a' className='w-64'/>
        <div>
            <h2 className='text-xl font-bold mt-1 h-10 w-64'>{data.title}</h2>
            <div className='flex flex-wrap mt-1 w-64 h-10'>
              {genres.map(item => (
                <p className='text-base mr-2' key={item}> {item}</p>
              ))}
            </div>
            <div className='flex justify-between mt-10 w-64'>
              <p>{release}</p>
              <div className='vote'>
                  <Rating name='read-only' precision={0.1} defaultValue={2.5} value={data.vote_average/2} readOnly/>
              </div>
            </div>
        </div>
    </NavLink>
    )
}

export default MovieItem;