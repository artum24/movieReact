import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../redux/movie-reducer";
import { AppStateType } from "../../redux/store";

import { Grid } from "@material-ui/core";

const Tabss: React.FC = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state: AppStateType) => state.movie.tab);
  const tabs = [
    { label: "Популярные", value: "popular" },
    { label: "Сейчас смотрят", value: "now_playing" },
    { label: "Рейтинговое", value: "top_rated" },
  ];

  const handleChange = (value: string) => {
    dispatch(setTab(value));
  };

  return (
    <Grid container>
      <Grid item xs={8}>
        <ul className="flex ml-8 mt-2">
          {tabs.map((item) => {
            let clas =
              item.value === tab
                ? "mr-3 text-indigo-700 text-base"
                : "mr-3 text-base";
            return (
              <li
                key={item.label}
                className={clas}
                onClick={() => handleChange(item.value)}
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Tabss;
