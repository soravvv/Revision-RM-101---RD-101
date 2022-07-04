import axios from "axios";

export const cityActions = {
  CITY_REQUEST: "CITY_REQUEST",
  CITY_SUCCESS: "CITY_SUCCESS",
  CITY_FAILURE: "CITY_FAILURE",
  ADD_REQUEST: "ADD_REQUEST",
  ADD_SUCCESS: "ADD_SUCCESS",
  ADD_FAILURE: "ADD_FAILURE",
};

export const getCityRequest = () => ({
  type: cityActions.CITY_REQUEST,
});

export const getCitySuccess = (data) => ({
  type: cityActions.CITY_SUCCESS,
  payload: data,
});

export const getCityFailure = () => ({
  type: cityActions.CITY_FAILURE,
});

export const getData = (dispatch) => {
  const requestAction = getCityRequest();
  dispatch(requestAction);
  return axios({
    url: "http://localhost:8080/data",
    method: "GET",
  })
    .then((res) => {
      const successAction = getCitySuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = getCityFailure();
      dispatch(failureAction);
    });
};

// Add Actions //

export const addCityRequest = () => ({
  type: cityActions.ADD_REQUEST,
});

export const addCitySuccess = () => ({
  type: cityActions.ADD_SUCCESS,
  payload: data,
});

export const addCityFailure = () => ({
  type: cityActions.ADD_FAILURE,
});

export const addData = ({ country, city, population, dispatch }) => {
  const requestAction = addCityRequest();
  dispatch(requestAction);
  return axios({
    url: "http://localhost:8080/data",
    method: "POST",
    data: {
      country,
      city,
      population,
    },
  })
    .then((res) => {
      const successAction = addCitySuccess();
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = addCityFailure();
      dispatch(failureAction);
    });
};
