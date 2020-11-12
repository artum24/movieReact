import {navbarAPI} from '../api/api';
import { ThunkAction } from 'redux-thunk';
import {AppStateType} from './store';
import {GenresType} from './types';
const SET_NAVBAR_DATA = 'SET_NAVBAR_DATA';

type initialStateType ={
    genres: Array<GenresType> 
}
let initialState:initialStateType = {
    genres:[],
}

const navbarReducer = (state=initialState, action:ActionsType) => {

    switch(action.type) {
        case SET_NAVBAR_DATA: {
            return {
                ...state,
                genres: action.payload,
            }
        }
        default: 
        return state;
    }
}

type ActionsType = SetNavbarDataType;

type SetNavbarDataType = {
    type : typeof SET_NAVBAR_DATA,
    payload: Array<GenresType>
}

export const setNavbarData = (genres: Array<GenresType>): SetNavbarDataType => ({
    type:SET_NAVBAR_DATA,
    payload: genres
})


// Thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const setNavbarDataThunk = ():ThunkType => async(dispatch) => {
    let responce = await navbarAPI.getGenras()
    if(responce.status === 200) {
        dispatch(setNavbarData(responce.data.genres))
    }
}
export default navbarReducer;