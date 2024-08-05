const initialState = {
  users: [],
  user: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
          return { ...state, users: action.payload };
      case 'FETCH_USERS_FAILURE':
          return { ...state, error: action.payload };
      case 'FETCH_USER_SUCCESS':
          return { ...state, user: action.payload };
      case 'FETCH_USER_FAILURE':
          return { ...state, error: action.payload };
      default:
          return state;
  }
};

export default userReducer;
