
import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress } from '@material-ui/core';
import RecomendMovie from './recomendMovie';
import './index.scss';

const RecomendMovieContainer = ({recomend,isFetching}) => {
    console.log(recomend);
    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <div className='recomends'>
                {recomend.map(rec => <RecomendMovie key={rec.id} title={rec.title} url={rec.backdrop_path} vote_average={rec.vote_average} release_date={rec.release_date} id={rec.id}/>)}    
            </div>}
        </>
    )

}

let mapStateToProps = (state) => ({
    recomend: state.detail.recomend,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(RecomendMovieContainer);