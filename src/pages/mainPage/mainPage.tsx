import React from 'react';

import NavbarContainer from '../../components/navbar/navbarContainer';
import MoviesContainer from '../../components/movie/moviesContainer';
import Paginationn from '../../components/pagination/pagination';
import SearchContainer from '../../components/searchPanel/searchContainer';
import Tabss from '../../components/tabsMain/tabs';

const MainPage:React.FC = () => {

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
