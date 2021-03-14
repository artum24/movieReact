import React from "react";

import { changePage } from "../../redux/movie/actions";
import { AppStateType } from "../../redux/store";

import { Pagination } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";

const Paginationn: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: AppStateType) => state.movie.page);
  const isFetching = useSelector(
    (state: AppStateType) => state.movie.isFetching
  );
  const total_results = useSelector(
    (state: AppStateType) => state.movie.total_results
  );

  const handleChange = (event: any, value: number) => {
    dispatch(changePage(value));
  };
  return (
    <div className="w-full mt-8 flex justify-center">
      <Pagination
        disabled={isFetching}
        count={Math.ceil(total_results / 20)}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

export default Paginationn;
