import React from "react";

import { useSelector } from "react-redux";
import { AppStateType } from "../../../redux/store";

import Actor from "./actor";

import { ScrollPanel } from "primereact/scrollpanel";
import { CircularProgress } from "@material-ui/core";

const Actors: React.FC = () => {
  const actors = useSelector((state: AppStateType) => state.detail.actors);
  const isFetching = useSelector(
    (state: AppStateType) => state.detail.isFetching
  );
  return isFetching ? (
    <CircularProgress />
  ) : (
    <ScrollPanel style={{ width: "100%", height: "300px" }} className="custom">
      <div className="w-4/5 flex flex-wrap justify-around ml-auto mr-auto">
        {actors.map((actor) => (
          <Actor actor={actor} key={actor.id} />
        ))}
      </div>
    </ScrollPanel>
  );
};

export default Actors;
