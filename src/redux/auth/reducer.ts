import { ActionsType, LOG_OUT } from "./actionsType";

type initialStateType = {
  login: string | null;
  isAuth: boolean;
};

let initialState: initialStateType = {
  login: null,
  isAuth: true,
};

const AuthReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case LOG_OUT: {
      return {
        ...state,
        isAuth: false,
        login: "",
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
