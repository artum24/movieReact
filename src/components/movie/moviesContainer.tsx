import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  setMoviesThunk,
  searchMoviesThunk,
  setTabThunk,
} from "../../redux/movie/thunk";

import Movies from "./movies";

import { CircularProgress } from "@material-ui/core";

const MoviesContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: AppStateType) => state.movie.movies);
  const genres = useSelector((state: AppStateType) => state.navbar.genres);
  const genre = useSelector((state: AppStateType) => state.movie.genre);
  const sort = useSelector((state: AppStateType) => state.movie.sort);
  const year = useSelector((state: AppStateType) => state.movie.year);
  const page = useSelector((state: AppStateType) => state.movie.page);
  const isFetching = useSelector(
    (state: AppStateType) => state.movie.isFetching
  );
  const search = useSelector((state: AppStateType) => state.movie.search);
  const tab = useSelector((state: AppStateType) => state.movie.tab);

  useEffect(() => {
    if (!search) {
      dispatch(setMoviesThunk(genre, sort, year, page));
      window.scrollTo(0, 0);
    }
    if (search.length > 0) {
      dispatch(searchMoviesThunk(search, page));
      window.scrollTo(0, 0);
    }
    if (tab !== "") {
      dispatch(setTabThunk(tab, page));
      window.scrollTo(0, 0);
    }
  }, [genre, sort, year, page, search, tab, dispatch]);
  return !isFetching ? (
    <Movies movies={movies} genres={genres} />
  ) : (
    <div className="loader">
      <CircularProgress />
    </div>
  );
};

export default MoviesContainer;
