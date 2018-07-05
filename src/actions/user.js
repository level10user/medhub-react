import { USER_FETCHED } from "../types";
import api from "../api";


export const userFetched = user => ({
	type: USER_FETCHED,
	user
})


export const fetchUser = email => api.user.fetchUser( email );
// .then( user => dispatch ( userFetched ( user ))) ;

	// user => console.log("user = " + user));

	// user => dispatch ( userFetched ( user ))) ;


export const updateProfile = data => () =>  api.profile.updateProfile(data) ;
