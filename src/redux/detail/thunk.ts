import { ThunkAction } from "redux-thunk";
import { DetailMovie } from "../../api/api";
import { AppStateType } from "../store";
import { chengeIsFetchin, setActors, setMovie, setRecomendation, setVideos } from "./actions";
import { ActionsType } from "./actionsType";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const setMovieThunk = (id:number):ThunkType =>  async (dispatch) => {
    dispatch(chengeIsFetchin(true))

    let responceDetail = await DetailMovie.getDetailMovie(id);
    dispatch(setMovie(responceDetail.data));

    let responceActor = await DetailMovie.getActorsMovie(id);
    dispatch(setActors(responceActor.data.cast));

    let responceVideo = await DetailMovie.getVideoMovie(id);
    dispatch(setVideos(responceVideo.data.results));

    let responce = await DetailMovie.getRecomendationMovie(id);
    dispatch(setRecomendation(responce.data.results));

    dispatch(chengeIsFetchin(false))
}