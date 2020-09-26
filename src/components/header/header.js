import React from 'react'
import {Grid} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoginFormFinish from '../Login/login';
import {connect} from 'react-redux';
import {logOut} from '../../redux/auth-reducer';
import './index.scss';

const Header = ({isAuth, login,logOut}) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const LogOut = () => {
        console.log('asassa')
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
                        <p className='loginName'> {login}</p>
                        <p className='logOutBtn'><Button style={{color:'white'}} onClick={LogOut}>LogOut</Button></p>
                    </div> 
                    :<div>
                        <p className='logIn'><Button style={{color:'white'}}  onClick={handleClickOpen}>LogIn</Button></p>
                        <div className='modal'>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">LogIn</DialogTitle>
                                <LoginFormFinish className='form-modal'/>
                            </Dialog>
                        </div>
                    </div>
                    }
                </div>
                </div>
            </Grid>
    )
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{logOut})(Header);