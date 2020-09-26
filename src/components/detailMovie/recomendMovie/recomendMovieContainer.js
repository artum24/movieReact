
import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress, Typography } from '@material-ui/core';
import RecomendMovie from './recomendMovie';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.scss';

const RecomendMovieContainer = ({recomend,isFetching}) => {

    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <ScrollPanel style={{width:'100%', height:'300px'}} className="custom">
                <div className='recomends'>
                    {(recomend.length === 0) ? <Typography variant='h6' className='errorRecomend'>Похожых фильмов не найдено{':((('}</Typography> 
                    :recomend.map(rec => <RecomendMovie key={rec.id} title={rec.title} url={rec.backdrop_path} vote_average={rec.vote_average} release_date={rec.release_date} id={rec.id}/>)}    
                </div>
            </ScrollPanel>}
        </>
    )

}

let mapStateToProps = (state) => ({
    recomend: state.detail.recomend,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(RecomendMovieContainer);