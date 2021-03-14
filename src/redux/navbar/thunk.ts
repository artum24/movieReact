import { ThunkAction } from "redux-thunk";
import { navbarAPI } from "../../api/api";
import { AppStateType } from "../store";
import { setNavbarData } from "./action";
import { ActionsType } from "./actionsType";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const setNavbarDataThunk = (): ThunkType => async (dispatch) => {
  let responce = await navbarAPI.getGenras();
  if (responce.status === 200) {
    dispatch(setNavbarData(responce.data.genres));
  }
};
