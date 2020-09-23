import React from 'react'
import {Grid, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoginFormFinish from '../Login/login';
import {connect} from 'react-redux';
import './index.scss';
const Header = ({isAuth, login}) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className='header'>
            <Grid container spacing={2} justify='space-between' alignItems='center'>     
                <NavLink to='/'>
                <div className="logo">
                    <Typography variant='h3'>КиноМир</Typography>
                </div>
                </NavLink>
                <div className='logIn'>
                    {isAuth ?<Typography variant='subtitle1'> {login}</Typography> 
                    :<div>
                        <Typography variant='subtitle1' className='logIn'><Button color='primary' variant="outlined" onClick={handleClickOpen}>LogIn</Button></Typography>
                        <div className='modal'>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">LogIn</DialogTitle>
                                <LoginFormFinish className='form-modal'/>
                            </Dialog>
                        </div>
                    </div>
                    }
                </div>
            </Grid>
        </div>
    )
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps)(Header);