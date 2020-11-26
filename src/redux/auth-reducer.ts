const LOG_OUT = 'LOG_OUT';

type initialStateType = {
    login: string | null,
    isAuth: boolean
}

let initialState:initialStateType = {
    login: null,
    isAuth: true
}

const AuthReducer = (state=initialState, action:ActionsType) => {
    switch (action.type) {
        case LOG_OUT : {
            return ({
                ...state,
                isAuth: false,
                login:''
            })
        }
        default: {
            return state
        }
    }
}

type ActionsType = LogOutType

type LogOutType = {
    type: typeof LOG_OUT
}

export const logOut = (): LogOutType => ({type:LOG_OUT })

export default AuthReducer;

