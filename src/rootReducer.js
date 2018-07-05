import { combineReducers } from  'redux';
import  user from './reducers/user';
import  claims from './reducers/claims';

export default combineReducers ({
	user,
	claims
});
