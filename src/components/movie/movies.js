import React from 'react';
import MovieItem from './movieItem/movieItem';
import './index.scss';

const Movies = ({movies,genres}) => {
    return(
        <div className='movies'>
        {movies.map(item => {
            let arr = []
            item.genre_ids.forEach(item => genres.map(i => {
                if(i.id === item) {
                    arr.push(i.name)
                }
                return arr
            }))
            return(
                <MovieItem data={item} genres={arr} key={item.id}/>   
        )})}
        </div>
    )
}

export default Movies;