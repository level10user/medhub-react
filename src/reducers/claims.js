import { CLAIMS_FETCHED } from "../types";

export default function claims(state = {}, action = {}) {
  switch (action.type) {
    case CLAIMS_FETCHED:
      console.log ("claims switch = " + JSON.stringify(action));
      console.log ("claims switch = " + JSON.stringify(state));
      if (!!action.claims) {
	      return action.claims;
	  }
	   
	  return "";
    default:
      return state;
  }
}