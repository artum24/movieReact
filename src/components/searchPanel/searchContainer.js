import React  from 'react';
import {connect} from 'react-redux';
import {setSearchPanel,searchMoviesThunk} from '../../redux/movie-reducer';
import SearchPanel from './searchPanel';

const SearchContainer = ({setSearchPanel,searchMoviesThunk}) => {

    return (
        <SearchPanel setSearchPanel={setSearchPanel} searchMoviesThunk={searchMoviesThunk} />
    )
}
let mapStateToProps = (state) => ({
    search:state.movie.search
})

export default connect(mapStateToProps,{setSearchPanel,searchMoviesThunk})(SearchContainer)