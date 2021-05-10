import axios from "axios";

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

// Thunk function
export async function fetchWiki(dispatch, getState) {
    alert("fetch");
    const response = await axios.get(`https://de.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=${getState().text}`) 
alert("response" + response);

    const res = getTextFromAxios(response.data); 

    alert("response" + response);
    alert(res);

    dispatch({ type: 'fontSize/fetchWiki', payload: res })
}

function getTextFromAxios(responseObj) { 
  let str = "---"; 
  if (responseObj.query == undefined) return"---"; 
  const keyVal = Object.keys(responseObj.query.pages);     
  str = responseObj.query.pages[keyVal].extract; 
  return str; 
}

// // Write a synchronous outer function that receives the `text` parameter:
// export function fetchWikiWithText(text) {
//   // Thunk function
//   return async function fetchWiki(dispatch, getState) {
//     alert("fetch");
//     const response = await axios.get(`https://de.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=${getState().text}`)
//     const res = getTextFromAxios(response.data);

//     alert("res");
//     alert(res);

//     dispatch({ type: 'fontSize/fetchWiki', payload: res })
//   }
// }