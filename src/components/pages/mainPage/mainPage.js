import React from 'react';
import NavbarContainer from '../../navbar/navbarContainer';
import MoviesContainer from '../../movie/moviesContainer';
import Paginationn from '../../pagination/pagination';
import SearchContainer from '../../searchPanel/searchContainer';
import Tabss from '../../tabsMain/tabs';
import './index.scss';
const MainPage = () => {

    return (
        <div className='gridMenu'>
          <div className='navBar'>
            <NavbarContainer/>
          </div>
          <div className='movie'>
            <div className='main-header'>
              <SearchContainer/>
            </div>
            <Tabss/>
            <MoviesContainer/>
            <Paginationn/>
          </div>
      </div>
    )
}

export default MainPage;
