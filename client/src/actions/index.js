import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function getContinents() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/countries/continents");
    return dispatch({
      type: "GET_CONTINENTS",
      payload: json.data,
    });
  };
}
