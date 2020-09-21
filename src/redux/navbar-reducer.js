import {navbarAPI} from '../components/api/api';

let initialState = {
    genres:[],
}

const navbarReducer = (state=initialState, action) => {

    switch(action.type) {
        case 'SET_NAVBAR_DATA': {
            return {
                ...state,
                genres: action.payload,
            }
        }
        default: 
        return state;
    }
}
export const setNavbarData = (genres) => ({
    type:'SET_NAVBAR_DATA',
    payload: genres
})
export const setNavbarDataThunk = () => async(dispatch) => {
    let responce = await navbarAPI.getGenras()
    if(responce.status === 200) {
        dispatch(setNavbarData(responce.data.genres))
    }
}
export default navbarReducer;