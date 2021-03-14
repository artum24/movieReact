import { GenresType } from "../types";

export const SET_NAVBAR_DATA = 'SET_NAVBAR_DATA';

export type ActionsType = SetNavbarDataType;

type SetNavbarDataType = {
    type : typeof SET_NAVBAR_DATA,
    payload: Array<GenresType>
}