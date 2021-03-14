import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/actions";
import { AppStateType } from "../../redux/store";

import { useAuth0 } from "@auth0/auth0-react";

import { Grid, Button } from "@material-ui/core";

const Header: React.FC = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    loginWithRedirect();
  };

  const LogOut = () => {
    logOut();
  };

  return (
    <Grid container spacing={2} justify="space-between" alignItems="center">
      <div className="header">
        <NavLink to="/">
          <div className="logo">
            <p>КиноМир</p>
          </div>
        </NavLink>
        <div className="logIn">
          {isAuth ? (
            <div className="logOut">
              <p className="loginName"> {isAuthenticated ? user.name : ""}</p>
              <p className="logOutBtn">
                <Button style={{ color: "white" }} onClick={dispatch(LogOut)}>
                  LogOut
                </Button>
              </p>
            </div>
          ) : (
            <div>
              <p className="logIn">
                <Button style={{ color: "white" }} onClick={handleClickOpen}>
                  LogIn
                </Button>
              </p>
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default Header;
