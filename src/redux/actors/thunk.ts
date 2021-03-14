import { ThunkAction } from "redux-thunk";
import { DetailActors } from "../../api/api";
import { AppStateType } from "../store";
import {
  chengeIsFetchin,
  setActor,
  setActorImage,
  setActorsMovie,
} from "./actions";
import { ActionsType } from "./actionsType";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const setActorDetailThunk = (id: number): ThunkType => async (
  dispatch
) => {
  dispatch(chengeIsFetchin(true));
  let responceDetail = await DetailActors.getDetatilActor(id);
  dispatch(setActor(responceDetail.data));
  let responceActorMovie = await DetailActors.getActorMovie(id);
  dispatch(setActorsMovie(responceActorMovie.data.cast));
  let responceActorImage = await DetailActors.getActorImage(id);
  dispatch(setActorImage(responceActorImage.data.profiles));
  dispatch(chengeIsFetchin(false));
};
