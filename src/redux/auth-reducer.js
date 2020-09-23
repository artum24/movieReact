let initialState = {
    login: null,
    password:null,
    isAuth: false
}

const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_IS_AUTH' : {
            return ({
                ...state,
                isAuth: true,
                ...action.payload
            })
        }
        case 'LOG_OUT' : {
            return ({
                ...state,
                isAuth: false
            })
        }
        default: {
            return state
        }
    }
}

export const setIsAuth = (login, password) => ({
    type: 'SET_IS_AUTH',
    payload: {login, password}
})
export const logOut = () => ({type:'LOG_OUT' })
export default AuthReducer;

