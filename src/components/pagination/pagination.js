import React from 'react';
import {connect} from 'react-redux';
import {Pagination} from '@material-ui/lab';
import {changePage} from '../../redux/movie-reducer';

const Paginationn = ({page,changePage,isFetching,total_results}) => {
    const handleChange = (event,value) => {
        changePage(value)
    };
    return (
        <div className='w-full mt-8 flex justify-center'>
            <Pagination disabled={isFetching} count={Math.ceil(total_results/20)} page={page} onChange={handleChange} color="primary"/>
        </div>
    )
}
let mapStateToProps = (state) => ({
    page:state.movie.page,
    isFetching:state.movie.isFetching,
    total_results: state.movie.total_results
})
export default connect(mapStateToProps,{changePage})(Paginationn)