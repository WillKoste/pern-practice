import {combineReducers} from 'redux';
import products from './products';
import users from './users';

export default combineReducers({
	productRed: products,
	usersRed: users
});
