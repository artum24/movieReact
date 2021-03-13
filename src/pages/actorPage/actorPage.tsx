import React, { useEffect } from "react";

import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { AppStateType } from "../../redux/store";
import { setActorDetailThunk } from "../../redux/actors-reducer";
import { withAuthRedirect } from "../../components/hoc/hoc";
import ActorDetail from "./actorDetail";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const ActorPageContainer: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state: AppStateType) => state.actor.isFetching
  );
  const detail = useSelector((state: AppStateType) => state.actor.detail);
  const actorsMovie = useSelector(
    (state: AppStateType) => state.actor.actorsMovie
  );
  const images = useSelector((state: AppStateType) => state.actor.images);

  let id = match.url.slice(7);
  let newId = +id;

  useEffect(() => {
    dispatch(setActorDetailThunk(newId));
  }, [dispatch, newId]);

  return !isFetching && detail !== null ? (
    <ActorDetail actor={detail} movie={actorsMovie} images={images} />
  ) : (
    <div className="loader">
      <CircularProgress />
    </div>
  );
};

let ActorPageContainerWithRouter = withRouter(ActorPageContainer);

export default compose(withAuthRedirect)(ActorPageContainerWithRouter);
