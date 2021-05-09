const initialState = { size: 16, text: "!" }

export default function fontSizeReducer(state = initialState, action) {
  switch (action.type) {
    case "fontSize/inc1": {
      // State replacement, not merged, state is immutable
      return {
        ...state,
        size: state.size + 1
      };
    }
    case "fontSize/dec1": {
      return {
        ...state,
        size: state.size - 1
      };
    }
    case "fontSize/setTo": {
      return {
        ...state,
        text: action.payload
      };
    }
    case "fontSize/reset": {
      return {
        ...state,
        size: initialState.size,
        text: initialState.text
      };
    }
    case "fontSize/fetchWiki": {
      return {
        ...state,
        text: action.payload
      };
    }
    default:
      return state;
  }
}
