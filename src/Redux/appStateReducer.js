const initialState = {
  loading: false,
  error: null
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APP_LOADED":
      return {
        ...state,
        loading: false
      };
      break;
    case "APP_LOADING":
      return {
        ...state,
        loading: true
      };
      break;
    case "APP_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error
      };
      break;

    default:
      return state;
  }
};

export default appStateReducer;
