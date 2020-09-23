import React,{useState} from 'react';
import { Typography} from '@material-ui/core';
import TabsItem from './tabs';
import Rating from '@material-ui/lab/Rating';
import Actors from './actors/actorsContainer';
import Videos from './videos/videosContainer';
import RecomendMovieContainer from './recomendMovie/recomendMovieContainer';
import './index.scss';

const DetailMovie = ({movie}) => {
    console.log(movie)
    const [value, setValue] = useState(0)
    const handleChange = (event,newValue) => {
        console.log(Boolean(newValue))
        setValue(newValue)
    }
    let url = (movie.poster_path === null) ? 
    'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const release = (movie.release_date === undefined)? '':movie.release_date;
    return (
        <div className='detailMovie'>
            <div className='container'>
                <div className='media-item'>
                    <div className="img">
                        <img src={url} alt='sasa' className='detailPoster'/>
                    </div>
                </div>
                <div className='info-item'>
                    <Typography variant='h4'>{movie.title}</Typography>
                    <div className='tagline'>
                        <Typography variant='subtitle1'>{movie.tagline}</Typography>
                    </div>
                    <Typography variant='subtitle1' className='genres'><span className='titleSet'>Жанр:</span>
                        {movie.genres.map(genre => {
                            return (
                                <div className='item' key={genre.name}>
                                    <Typography variant='subtitle1'> {genre.name}{', '}</Typography>
                                </div>
                            )
                        })}
                    </Typography>
                    <div className='release'>
                        <Typography variant='subtitle1'><span className='titleSet'>Дата выхода:</span>{' '}{release}</Typography>
                    </div>
                    <div className='budget'>
                        <Typography variant='subtitle1'><span className='titleSet'>Бюджет:</span>{' '}{movie.budget}{" $"}</Typography>
                    </div>
                    <div className='revenue'>
                        <Typography variant='subtitle1'><span className='titleSet'>Доход:</span>{' '}{movie.revenue}{" $"}</Typography>
                    </div>
                    <Typography variant='subtitle1' className='production_countries'><span className='titleSet'>Страна:</span>
                        {movie.production_countries.map(country => {
                            return (
                                <div className='item' key={country.name}>
                                    <Typography variant='subtitle1'> {country.name}{', '}</Typography>
                                </div>
                            )
                        })}
                    </Typography>
                    <Typography variant='subtitle1'>
                        <div className='rating'>
                            <span className='titleSet'>Рейтинг:</span>
                            <div className='stars'>
                                <Rating name='read-only' precision={0.1} defaultValue={2.5} value={movie.vote_average/2} readOnly/>
                            </div>
                        </div>
                    </Typography>
                    <div className='revenue'>
                        <Typography variant='subtitle1'><span className='titleSet'>Время:</span>{' '}{movie.runtime}{" мин."}</Typography>
                    </div>
                </div>
            </div>
            <div className='overview'>
                <Typography variant='subtitle1'>{movie.overview}</Typography>
            </div>
            <TabsItem handleChange={handleChange} value={value}/>
            {(!Boolean(value))?<Actors/>:(value===1)?<Videos/>:<RecomendMovieContainer/>}
        </div>
    )
}

export default DetailMovie;