import React  from 'react';
import {connect} from 'react-redux';
import {setSearchPanel,searchMoviesThunk} from '../../redux/movie-reducer';
import { AppStateType } from '../../redux/store';

import SearchPanel from './searchPanel';

type SearchContainerType = {
    setSearchPanel: (str:string) => void,
    searchMoviesThunk: (str:string, page: number) =>void,
}

const SearchContainer:React.FC<SearchContainerType> = ({setSearchPanel,searchMoviesThunk}) => {

    return (
        <SearchPanel setSearchPanel={setSearchPanel} searchMoviesThunk={searchMoviesThunk} />
    )
}

let mapStateToProps = (state:AppStateType) => ({
})

export default connect(mapStateToProps,{setSearchPanel,searchMoviesThunk})(SearchContainer)