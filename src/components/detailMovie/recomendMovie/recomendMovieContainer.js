
import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress, Typography } from '@material-ui/core';
import RecomendMovie from './recomendMovie';
import './index.scss';

const RecomendMovieContainer = ({recomend,isFetching}) => {
    console.log(recomend);
    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <div className='recomends'>
                {(recomend.length === 0) ? <Typography variant='h6' className='errorRecomend'>Похожых фильмов не найдено{':((('}</Typography> 
                :recomend.map(rec => <RecomendMovie key={rec.id} title={rec.title} url={rec.backdrop_path} vote_average={rec.vote_average} release_date={rec.release_date} id={rec.id}/>)}    
            </div>}
        </>
    )

}

let mapStateToProps = (state) => ({
    recomend: state.detail.recomend,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(RecomendMovieContainer);