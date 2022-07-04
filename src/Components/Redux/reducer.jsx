import { cityActions } from "./action";

const init = {
  loading: true,
  data: [],
  error: false,
};

export const cityReducer = (state = init, action) => {
  switch (action.type) {
    case cityActions.CITY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case cityActions.CITY_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case cityActions.CITY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case cityActions.ADD_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case cityActions.ADD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case cityActions.ADD_REQUEST: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
