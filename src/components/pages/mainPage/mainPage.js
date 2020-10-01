import React from 'react';
import NavbarContainer from '../../navbar/navbarContainer';
import MoviesContainer from '../../movie/moviesContainer';
import Paginationn from '../../pagination/pagination';
import SearchContainer from '../../searchPanel/searchContainer';
import Tabss from '../../tabsMain/tabs';
const MainPage = () => {

    return (
        <div className='mt-10 w-full flex sm:block md:flex'>
          <NavbarContainer/>
          <div className='w-full'>
            <div className=' flex-wrap sm:block lg:flex lg:justify-between'>
              <SearchContainer/>
              <Tabss/>
            </div>
            <MoviesContainer/>
            <Paginationn/>
          </div>
      </div>
    )
}

export default MainPage;
