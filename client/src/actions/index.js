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

export function filterContinents(continent) {
  return async function (dispatch) {
    try {
      const allCountries = await axios.get("http://localhost:3001/countries");
      let countriesResult = allCountries.data.filter((c) => {
        return c.continent === continent;
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
      let names = [];
      json.data.forEach((a) => {
        if (a.name === activity) {
          a.countries.forEach((c) => names.push(c.name));
        }
      });
      const countries = await axios.get("http://localhost:3001/countries");
      let newCountries = countries.data.filter((c) => names.includes(c.name));
      return dispatch({
        type: "FILTER_BY_ACTIVITY",
        payload: newCountries,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function sortByAlf(value) {
  return async function (dispatch) {
    if (value === "ascending") {
      return dispatch({
        type: "SORT_ALF_ASC",
      });
    } else if (value === "descending") {
      return dispatch({
        type: "SORT_ALF_DESC",
      });
    }
  };
}

export function sortByPopulation(value) {
  return async function (dispatch) {
    if (value === "max") {
      return dispatch({
        type: "SORT_MAX_POPULATION",
      });
    } else if (value === "min") {
      return dispatch({
        type: "SORT_MIN_POPULATION",
      });
    }
  };
}

export function getDetail(idCountry) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `http://localhost:3001/countries/${idCountry}`
      );
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postActivity(activity) {
  return async function (dispatch) {
    try {
      let newActivity = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      alert("Activity created succesfully!");
      console.log("Algo salio mal");
      return newActivity;
    } catch (error) {
      console.log(error);
      alert("Algo salió mal");
    }
  };
}

export function deleteActivity(id) {
  return async function (dispatch) {
    try {
      let deletedActivity = await axios.put(
        "http://localhost:3001/activities",
        { id }
      );
      return deletedActivity.data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateActivity(input) {
  return async function (dispatch) {
    try {
      console.log(input);
      let update = await axios.put(
        "http://localhost:3001/activities/put",
        input
      );
      return update.data;
    } catch (error) {
      console.log(error);
    }
  };
}
