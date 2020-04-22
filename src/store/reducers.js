import { combineReducers } from "redux";
import city from './reducer/city';
import userinfo from './reducer/userinfo';
import collect from './reducer/collect';


const reducers=combineReducers({
	city,userinfo,collect
})
 export default reducers