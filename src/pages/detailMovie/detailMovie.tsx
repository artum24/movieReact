import React,{useState} from 'react';
import { Grid} from '@material-ui/core';
import TabsItem from './tabs';
import Rating from '@material-ui/lab/Rating';
import Actors from './actors/actorsContainer';
import Videos from './videos/videosContainer';
import RecomendMovieContainer from './recomendMovie/recomendMovieContainer';
import './index.scss';
import {Banner} from './styled';
import { DetailMovieType } from '../../redux/types';

type DetailMovieTypee = {
    movie: DetailMovieType | null
}

const DetailMovie:React.FC<DetailMovieTypee> = ({movie}) => {
    const [value, setValue] = useState(0)

    if (movie === null) {
        return <h1>Loading ...</h1>
    }
    let bg = (movie !== null && movie.backdrop_path === null) ? `#fff`:`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    const handleChange = (e:any,newValue:number) => {
        setValue(newValue)
    }
    let url = (movie.poster_path === null) ? 
    'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const release = (movie.release_date === undefined)? '':movie.release_date;
    return (
        <>
        <Grid container spacing={2}>
            <Banner bg={bg} className='bg'>
                <div className='detailMovie text-white w-full text-base'>
                    <div className='container h-full'>
                        <div className='sm:w-full flex ml-8 justify-center sm:ml-8 sm:w-1/5 md:w-2/5'>
                            <img src={url} alt='sasa' className=' w-3/4 md:w-auto mt-0'/>
                        </div>
                        <div className='info-item text-base ml-5'>
                            <h4 className='font-bold text-xl'>{movie.title}</h4>
                            <div className='tagline'>
                                <p className='mt-1 italic md:mt-3'>{movie.tagline}</p>
                            </div>
                            <div className='mt-1 flex flex-wrap md:mt-3'><span className='titleSet'>Жанр:</span>
                                {movie.genres.map(genre => {
                                    return (
                                        <div key={genre.name}>
                                            <p className='mr-2 text-base'> {genre.name}{', '}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='mt-1 md:mt-3'><span className='titleSet'>Дата выхода:</span>{' '}{release}</div>
                            <div className='mt-1 md:mt-3'><span className='titleSet'>Бюджет:</span>{' '}{movie.budget}{" $"}</div>
                            <div className='mt-1 md:mt-3'><span className='titleSet'>Доход:</span>{' '}{movie.revenue}{" $"}</div>
                            <div className='flex md:block'>
                                <div className='rating'>
                                    <span className='titleSet'>Рейтинг:</span>
                                    <div className='stars'>
                                        <Rating name='read-only' precision={0.1} defaultValue={2.5} value={movie.vote_average/2} readOnly/>
                                    </div>
                                </div>
                                <div className='revenue ml-2 md:ml-0'>
                                    <p><span className='titleSet'>Время:</span>{' '}{movie.runtime}{" мин."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Banner>
            <div className='text-base w-4/5 ml-auto mr-auto mt-8 mb-8'>
                <p>{movie.overview}</p>
            </div>
        </Grid>
        {/* className='mb-6' */}
        <TabsItem handleChange={handleChange} value={value}/>
        {(!Boolean(value))?<Actors/>:(value===1)?<Videos/>:<RecomendMovieContainer/>}
        </>
    )
}

export default DetailMovie;