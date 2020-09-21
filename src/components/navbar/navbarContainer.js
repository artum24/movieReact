import React, { useEffect } from 'react';
import Navbar from './navbar';
import {connect} from 'react-redux';
import {setNavbarDataThunk} from '../../redux/navbar-reducer';
import {setSearchSet,setSearchPanel} from '../../redux/movie-reducer'; 
const NavbarContainer = ({setNavbarDataThunk,genres,setSearchSet,isFetching,setSearchPanel}) => {
    useEffect(() => {
        setNavbarDataThunk()
    },[setNavbarDataThunk])

    return (
        <Navbar genres={genres} setSearchSet={setSearchSet} isFetching={isFetching} setSearchPanel={setSearchPanel}/>
    )
}

let mapStateToProps = (state) => ({
    genres:state.navbar.genres,
    isFetching: state.movie.isFetching
})



export default connect(mapStateToProps,{setNavbarDataThunk,setSearchSet,setSearchPanel})(NavbarContainer);