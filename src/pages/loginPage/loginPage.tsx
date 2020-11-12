import React from 'react';
import LoginFormFinish from '../../components/Login/login';
import './index.scss';
const LoginPage:React.FC = () => {
    return (
        <div className='loginPage'>
            <LoginFormFinish/>
        </div>
    )
}

export default LoginPage;