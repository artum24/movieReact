import React from 'react';
import NavbarContainer from '../../navbar/navbarContainer';
import MoviesContainer from '../../movie/moviesContainer';
import Paginationn from '../../pagination/pagination';
import SearchContainer from '../../searchPanel/searchContainer';
import Tabss from '../../tabsMain/tabs';
import {Grid} from '@material-ui/core';


const MainPage = () => {

    return (
        <div className='gridMenu'>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NavbarContainer/>
          </Grid>
          <Grid item xs={9}>
            <div className='main-header'>
            <SearchContainer/>
              <Tabss/>
            </div>
            <MoviesContainer/>
          </Grid>
        </Grid>
        <Paginationn/>
      </div>
    )
}

export default MainPage;
