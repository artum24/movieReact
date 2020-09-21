import React from 'react'
import {Grid, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import './index.scss';
const Header = () => {

    return (
        <div className='header'>
            <Grid container spacing={2} justify='space-between' alignItems='center'>     
                <NavLink to='/'>
                <div className="logo">
                    <Typography variant='h3'>КиноМир</Typography>
                </div>
                </NavLink>
                <div className='logIn'>
                    <Typography variant='subtitle1' className='logIn'>LogIn</Typography>
                </div>
            </Grid>
        </div>
    )
}

export default Header;