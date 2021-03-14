import React, { useEffect } from "react";

import { AppStateType } from "../../redux/store";
import { setNavbarDataThunk } from "../../redux/navbar/thunk";

import { TemporaryDrawer } from "./navbar";
import { useDispatch, useSelector } from "react-redux";

const NavbarContainer: React.FC = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state: AppStateType) => state.navbar.genres);
  const isFetching = useSelector(
    (state: AppStateType) => state.movie.isFetching
  );
  useEffect(() => {
    dispatch(setNavbarDataThunk());
  }, [dispatch]);

  return <TemporaryDrawer genres={genres} isFetching={isFetching} />;
};

export default NavbarContainer;
