const initialState = {
  countries: [],
  allCountries: [],
  continents: [],
  continentsToFilter: [],
  activities: [],
  countryDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
        continentsToFilter: [],
      };
    case "GET_CONTINENTS":
      return {
        ...state,
        continents: action.payload,
      };
    case "SEARCH_BY_NAME":
      return {
        ...state,
        countries: action.payload,
      };
    case "FILTER_CONTINENTS":
      return {
        ...state,
        countries: action.payload,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    case "FILTER_BY_ACTIVITY":
      return {
        ...state,
        countries: action.payload,
      };
    case "SORT_ALF_ASC":
      return {
        ...state,
        countries: state.countries
          .map((e) => e)
          .sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return -1;
            }
          }),
      };
    case "SORT_ALF_DESC":
      return {
        ...state,
        countries: state.countries
          .map((e) => e)
          .sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            } else {
              return 1;
            }
          }),
      };
    case "SORT_MAX_POPULATION":
      return {
        ...state,
        countries: state.countries
          .map((e) => e)
          .sort((a, b) => {
            if (Number(a.population) > Number(b.population)) {
              return -1;
            }
            if (Number(a.population) === Number(b.population)) {
              return 0;
            }
            if (Number(a.population) < Number(b.population)) {
              return 1;
            }
          }),
      };
    case "SORT_MIN_POPULATION":
      return {
        ...state,
        countries: state.countries
          .map((e) => e)
          .sort((a, b) => {
            if (Number(a.population) > Number(b.population)) {
              return 1;
            }
            if (Number(a.population) === Number(b.population)) {
              return 0;
            }
            if (Number(a.population) < Number(b.population)) {
              return -1;
            }
          }),
      };
    case "GET_DETAIL":
      return {
        ...state,
        countryDetail: action.payload,
      };
    case "POST_ACTIVITY":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
