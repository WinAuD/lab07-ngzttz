const initialState = { size: 16, text: "!" }

export default function fontReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/inc1": {
      // State replacement, not merged, state is immutable
      return {
        ...state,
        count: state.count + 1
      };
    }
    case "counter/dec1": {
      return {
        ...state,
        count: state.count - 1
      };
    }
    case "counter/setTo": {
      return {
        ...state,
        count: action.payload
      };
    }
    default:
      return state;
  }
}
