import React from 'react';
import {connect} from 'react-redux';
import {Pagination} from '@material-ui/lab';
import {changePage} from '../../redux/movie-reducer';
import { AppStateType } from '../../redux/store';

type MapStateToPropsType = {
    page: number,
    isFetching: boolean,
    total_results: number  
}

type MapDispatchToPropsType = {
    changePage: (page: number) => void
}

type PaginationnType = MapStateToPropsType & MapDispatchToPropsType

const Paginationn:React.FC<PaginationnType> = ({page,changePage,isFetching,total_results}) => {
    const handleChange = (event:any,value:number) => {
        changePage(value)
    };
    return (
        <div className='w-full mt-8 flex justify-center'>
            <Pagination disabled={isFetching} count={Math.ceil(total_results/20)} page={page} onChange={handleChange} color="primary"/>
        </div>
    )
}
let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    page:state.movie.page,
    isFetching:state.movie.isFetching,
    total_results: state.movie.total_results
})
export default connect(mapStateToProps,{changePage})(Paginationn)