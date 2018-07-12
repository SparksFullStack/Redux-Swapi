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
      console.log("Fetching State");
      return { ...state, fetching: true };
    case "FETCHED":
      console.log("The state was fetched!", action.payload)
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true,
      }
    case "ERROR":
      console.log("There was an error")
      return { ...state, fetching: false, error: action.payload}
    default:
      return state;
  }
};
