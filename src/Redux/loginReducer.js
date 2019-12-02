const initialState = {
  username: "",
  password: "",
  uid: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        username: action.username,
        password: action.password,
        uid: Date.now()
      };
      break;
    case "DELETE_USER":
      return {
        ...state,
        username: "",
        password: "",
        uid: null
      };
      break;

    default:
      return state;
  }
};

export default loginReducer;
