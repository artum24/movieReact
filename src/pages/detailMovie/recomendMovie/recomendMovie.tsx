import React from 'react';
import {NavLink} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

type RecomendMovieType = {
    title: string,
    url: string | null,
    vote_average: number,
    release_date: string,
    id: number
}

const RecomendMovie:React.FC<RecomendMovieType> = ({title,url,vote_average,release_date, id}) => {
    let Img = (url === null) ? 
    'https://w7.pngwing.com/pngs/1010/410/png-transparent-logo-question-hollow-question-mark-miscellaneous-angle-text.png':
    `https://image.tmdb.org/t/p/w500${url}`;
    const release = release_date.slice(0,4);
    return (
        <NavLink to={`/movie/${id}/actors`} className='mt-8 bg-white rounded overflow-hidden ml-8 shadow-md ml-0 w-64'>
            <img src={Img} alt='a'className='w-auto'/>
            <p className='h-15'>{title}</p>
            <div className='flex justify-between'>
                <p>{release} г.</p>
                <Rating name='read-only' precision={0.1} defaultValue={2.5} value={vote_average/2} readOnly/>
            </div>
        </NavLink>
    )
}

export default RecomendMovie;

