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
        default: {
            return state
        }
    }
}

export const setIsAuth = (login, password) => ({
    type: 'SET_IS_AUTH',
    payload: {login, password}
})

export default AuthReducer;

