import React from "react";

import { useSelector } from "react-redux";
import { AppStateType } from "../../../redux/store";

import RecomendMovie from "./recomendMovie";

import { CircularProgress, Typography } from "@material-ui/core";
import { ScrollPanel } from "primereact/scrollpanel";

const RecomendMovieContainer: React.FC = () => {
  const recomend = useSelector((state: AppStateType) => state.detail.recomend);
  const isFetching = useSelector(
    (state: AppStateType) => state.detail.isFetching
  );

  return isFetching ? (
    <CircularProgress />
  ) : (
    <ScrollPanel style={{ width: "100%", height: "300px" }} className="custom">
      <div className="w-4/5 flex flex-wrap justify-around ml-auto mr-auto">
        {recomend.length === 0 ? (
          <Typography variant="h6" className="errorRecomend">
            Похожых фильмов не найдено{":((("}
          </Typography>
        ) : (
          recomend.map((rec) => (
            <RecomendMovie
              key={rec.id}
              title={rec.title}
              url={rec.backdrop_path}
              vote_average={rec.vote_average}
              release_date={rec.release_date}
              id={rec.id}
            />
          ))
        )}
      </div>
    </ScrollPanel>
  );
};

export default RecomendMovieContainer;
