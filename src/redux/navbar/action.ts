import { GenresType } from "../types";
import { ActionsType, SET_NAVBAR_DATA } from "./actionsType";

export const setNavbarData = (genres: Array<GenresType>): ActionsType => ({
  type: SET_NAVBAR_DATA,
  payload: genres,
});
