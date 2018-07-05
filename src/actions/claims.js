import { CLAIMS_FETCHED } from "../types";
import api from "../api";

// data.entities.books
export const claimsFetched = claims => ({
  type: CLAIMS_FETCHED,
  claims
});

export const fetchClaims = () => dispatch =>
  api.claims
    .fetchAll()
    .then(claims => dispatch(claimsFetched(claims)));

