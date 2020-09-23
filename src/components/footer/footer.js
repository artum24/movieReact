import { Typography } from '@material-ui/core';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='me'>
                <Typography variant='h6'>Admin</Typography>
                <Typography variant='subtitle1'>Artur Polianskiy</Typography>
            </div>
            <div className='contacts'>
                <Typography variant='h6'>E-mail</Typography>
                <Typography variant='subtitle1'>artyr.polianskij@gmail.com</Typography>
            </div>
            <div className="links">
                <InstagramIcon color='secondary'/>
                <FacebookIcon color='inherit'/>
                <GitHubIcon color='inherit'/>
                <LinkedInIcon color='inherit'/>
            </div>

        </div>
    )
}

export default Footer;