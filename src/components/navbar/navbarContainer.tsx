import React, { useEffect } from 'react';

import {connect} from 'react-redux';
import { GenresType } from '../../redux/types';
import { AppStateType } from '../../redux/store';
import {setNavbarDataThunk} from '../../redux/navbar-reducer';
import {setSearchSet,setSearchPanel} from '../../redux/movie-reducer'; 

import {TemporaryDrawer} from './navbar';

type MapStateToPropsType = {
    genres: Array<GenresType> ,
    isFetching:boolean,
}

type MapDispatchToProps = {
    setSearchPanel: (str:string) => void,
    setNavbarDataThunk: () => void,
    setSearchSet: (genre:number,sort:string,year:number) => void,
}

type NavbarContainerType = MapStateToPropsType & MapDispatchToProps;

const NavbarContainer: React.FC<NavbarContainerType> = ({isFetching,setNavbarDataThunk,genres,setSearchSet,setSearchPanel}) => {

    useEffect(() => {
        setNavbarDataThunk()
    },[setNavbarDataThunk])

    return (
        <TemporaryDrawer genres={genres} isFetching={isFetching} setSearchSet={setSearchSet} setSearchPanel={setSearchPanel}/>
    )
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    genres:state.navbar.genres,
    isFetching: state.movie.isFetching,
})

export default connect(mapStateToProps,{setNavbarDataThunk,setSearchSet,setSearchPanel})(NavbarContainer);