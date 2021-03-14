import React, { useEffect } from "react";

import { withRouter, RouteComponentProps } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/store";
import { setMovieThunk } from "../../redux/detail/thunk";

import DetailMovie from "./detailMovie";
import { withAuthRedirect } from "../../components/hoc/hoc";

import { CircularProgress } from "@material-ui/core";

const DetailMovieContainer: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state: AppStateType) => state.detail.movie);
  const isFetching = useSelector(
    (state: AppStateType) => state.detail.isFetching
  );
  const id = match.url.slice(7);
  const idActor = id.substr(0, id.length - 7);
  const newId = +idActor;

  useEffect(() => {
    dispatch(setMovieThunk(newId));
  }, [dispatch, newId]);

  return !isFetching ? (
    <DetailMovie movie={movie} />
  ) : (
    <div className="loader">
      <CircularProgress />
    </div>
  );
};

let DetailMovieContainerWithRouter = withRouter(DetailMovieContainer);

export default compose(withAuthRedirect)(DetailMovieContainerWithRouter);
