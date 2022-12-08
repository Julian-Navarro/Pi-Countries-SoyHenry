const initialState = {
  countries: [],
  allCountries: [],
  continents: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
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
    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
