import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import {validateLogIn} from '../../utils/validator';
import logInTextField from '../common/Forms/logIn';
import {connect} from 'react-redux';
import {setIsAuth} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
const LoginForm = ({handleSubmit, pristine, submitting}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='login'>
        <Field name="login" component={logInTextField} label="Login"/>
      </div>
      <div className='password'>
        <Field name="password" component={logInTextField} label="Password" type='password'/>
      </div>
      <div />
      <div className='submitBtn'>
        <Button variant='outlined' color='primary' type="submit" disabled={pristine || submitting} >
          LogIn
        </Button>
      </div>
    </form>
  )
}
const LoginFormFinish = ({setIsAuth,isAuth}) => {
    const submit = (values) => {
        console.log(values)
        setIsAuth(values.login,values.password)
    }
    if (isAuth) return <Redirect to='/'/>
    return (
        <LoginFormRedux onSubmit={submit}/>
    )
}

const LoginFormRedux = reduxForm({form: 'MaterialUiForm', validate:validateLogIn})(LoginForm)
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{setIsAuth})(LoginFormFinish)