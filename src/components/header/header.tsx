import React from 'react'
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';
import {logOut} from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/store';

import { useAuth0 } from "@auth0/auth0-react";

import {Grid,Button} from '@material-ui/core';

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToProps = {
    logOut: () => void
}

type HeaderType = MapStateToPropsType & MapDispatchToProps;

const Header: React.FC<HeaderType> = ({isAuth,logOut}) => {
    const { loginWithRedirect, user, isAuthenticated  } = useAuth0();
    
    const handleClickOpen = () => {
        loginWithRedirect();
    };

    const LogOut = () => {
        logOut()
    }

    return (
        <Grid container spacing={2} justify='space-between' alignItems='center'>     
            <div className='header'>
                <NavLink to='/'>
                    <div className="logo">
                        <p>КиноМир</p>
                    </div>
                </NavLink>
                <div className='logIn'>
                    {isAuth 
                    ?<div className='logOut'>
                        <p className='loginName'> {isAuthenticated? user.name : ''}</p>
                        <p className='logOutBtn'><Button style={{color:'white'}} onClick={LogOut}>LogOut</Button></p>
                    </div> 
                    :<div>
                        <p className='logIn'><Button style={{color:'white'}}  onClick={handleClickOpen}>LogIn</Button></p>
                    </div>
                    }
                </div>
            </div>
        </Grid>
    )
}


let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps,{logOut})(Header);