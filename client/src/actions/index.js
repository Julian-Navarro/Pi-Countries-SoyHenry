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

export function getActivities() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/activities");
    return dispatch({
      type: "GET_ACTIVITIES",
      payload: json.data,
    });
  };
}

export function searchByName(country) {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/countries");
    const countriesByName = [];
    json.data.forEach((c) => {
      if (c.name.toLowerCase().includes(country.toLowerCase())) {
        countriesByName.push(c);
      }
    });
    return dispatch({
      type: "SEARCH_BY_NAME",
      payload: countriesByName,
    });
  };
}

export function filterContinents(continentsToFilter) {
  return async function (dispatch) {
    try {
      const allCountries = await axios.get("http://localhost:3001/countries");
      let countriesResult = [];
      continentsToFilter.forEach(async (continent) => {
        await allCountries.data.forEach((country) => {
          if (country.continent) {
            if (country.continent === continent) {
              countriesResult.push(country);
            }
          }
        });
      });
      return dispatch({
        type: "FILTER_CONTINENTS",
        payload: countriesResult,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByActivity(activity) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        "http://localhost:3001/activities/activities"
      );
      json.data.forEach((a) => {
        if (a.name === activity) {
          return dispatch({
            type: "FILTER_BY_ACTIVITY",
            payload: a.countries,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}
