import React from 'react'

import { Button,Typography } from '@material-ui/core'

import { useAuth0 } from "@auth0/auth0-react";

const LoginForm:React.FC = () => {
  
  const { loginWithRedirect } = useAuth0();
  
  return (
    <>
      <Typography variant='h4'>You need to log in:)</Typography>
      <Button color='primary' variant='contained' onClick={() => loginWithRedirect()}>LogIn</Button>
    </>
  )
}


export default LoginForm