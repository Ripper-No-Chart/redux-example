const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SUMA":
      return {
        ...state,
        count: state.count + 1,
      };
    case "RESTA":
      return {
        ...state,
        count: state.count - 1,
      };
    case "MULTIPLICAR":
      return {
        ...state,
        count: state.count * action.number,
      };
    default:
      return state;
  }
};
