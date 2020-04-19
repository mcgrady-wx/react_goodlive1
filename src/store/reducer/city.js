import { INIT_CITY,UPDATE_CITY } from "../consts/city"


const initstate={}

const auth=(state=initstate,action)=>{
	switch(action.type){
		case INIT_CITY:
			return state=action.data
		case UPDATE_CITY:
			return state=action.data	
		default:
			return state;
	}
}

export default auth