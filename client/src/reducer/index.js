const initialState = {
  countries: [],
  allCountries: [],
  continents: [],
  continentsToFilter: [],
  activities: [],
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
    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
