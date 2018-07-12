import /* we need our action types here*/ '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, fetching: true };
    case "FETCHED":
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true,
      }
    case "ERROR":
      return { ...state, fetching: false, error: action.payload}
    default:
      return state;
  }
};
