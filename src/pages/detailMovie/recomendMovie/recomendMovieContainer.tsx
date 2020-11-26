
import React from 'react';

import {connect} from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { MovieType } from '../../../redux/types';

import RecomendMovie from './recomendMovie';

import {CircularProgress, Typography } from '@material-ui/core';
import { ScrollPanel } from 'primereact/scrollpanel';

type RecomendMovieContainerType = {
    recomend: Array<MovieType>,
    isFetching: boolean
}

const RecomendMovieContainer:React.FC<RecomendMovieContainerType> = ({recomend,isFetching}) => {

    return (
        <>
            {(isFetching)?<CircularProgress/>:
            <ScrollPanel style={{width:'100%', height:'300px'}} className="custom">
                <div className='w-4/5 flex flex-wrap justify-around ml-auto mr-auto'>
                    {(recomend.length === 0) ? <Typography variant='h6' className='errorRecomend'>Похожых фильмов не найдено{':((('}</Typography> 
                    :recomend.map(rec => <RecomendMovie key={rec.id} title={rec.title} url={rec.backdrop_path} vote_average={rec.vote_average} release_date={rec.release_date} id={rec.id}/>)}    
                </div>
            </ScrollPanel>}
        </>
    )

}

let mapStateToProps = (state:AppStateType):RecomendMovieContainerType => ({
    recomend: state.detail.recomend,
    isFetching: state.detail.isFetching
})
export default connect(mapStateToProps)(RecomendMovieContainer);