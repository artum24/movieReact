import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {setNavbarDataThunk} from '../../redux/navbar-reducer';
import {setSearchSet,setSearchPanel} from '../../redux/movie-reducer'; 
import {TemporaryDrawer} from './navbar';
const NavbarContainer = ({setNavbarDataThunk,genres,setSearchSet,isFetching,setSearchPanel}) => {
    useEffect(() => {
        setNavbarDataThunk()
    },[setNavbarDataThunk])

    return (
        <>
            <TemporaryDrawer genres={genres} setSearchSet={setSearchSet} isFetching={isFetching} setSearchPanel={setSearchPanel}/>
        </>
        )
}

let mapStateToProps = (state) => ({
    genres:state.navbar.genres,
    isFetching: state.movie.isFetching
})



export default connect(mapStateToProps,{setNavbarDataThunk,setSearchSet,setSearchPanel})(NavbarContainer);