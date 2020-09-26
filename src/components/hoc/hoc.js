import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            console.log(this.props.isAuth)
            return (
                <>
                {!this.props.isAuth ? <Redirect to='/login'/>
                :<Component {...this.props}/>}
                </>
            )
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}