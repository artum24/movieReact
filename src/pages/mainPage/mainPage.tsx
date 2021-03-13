import React from 'react';

import NavbarContainer from '../../components/navbar/navbarContainer';
import MoviesContainer from '../../components/movie/moviesContainer';
import Paginationn from '../../components/pagination/pagination';
import Tabss from '../../components/tabsMain/tabs';
import SearchPanel from '../../components/searchPanel/searchPanel';

const MainPage:React.FC = () => {

    return (
      <div className='mt-10 w-full flex sm:flex md:flex'>
        <NavbarContainer/>
        <div className='w-full'>
          <div className=' flex-wrap sm:block lg:flex lg:justify-between'>
            <SearchPanel/>
            <Tabss/>
          </div>
          <MoviesContainer/>
          <Paginationn/>
        </div>
      </div>
    )

}

export default MainPage;
