import React,{useState,useEffect} from 'react';
import { GenresType, MovieType } from '../../redux/types';
import MovieItem from './movieItem/movieItem';

type MoviesType = {
    movies: Array<MovieType>,
    genres: Array<GenresType>
}


const Movies:React.FC<MoviesType> = ({movies,genres}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {setWindowWidth(window.innerWidth)}
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      console.log(windowWidth)
    },[windowWidth])
    return(
        <div className='flex flex-wrap md:justify-around md:w-11/12'>
        {movies.map(item => {
            let arr:Array<string> = []
            item.genre_ids.forEach(item => genres.map(i => {
                if(i.id === item) {
                    arr.push(i.name)
                }
                return arr
            }))
            return(
                <MovieItem data={item} genres={arr} key={item.id} windowWidth={windowWidth}/>   
        )})}
        </div>
    )
}

export default Movies;