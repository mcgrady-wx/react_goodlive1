import { INIT_CITY,UPDATE_CITY } from "../consts/city"

export const initCity=(data)=>{
	return {
		type:INIT_CITY,
		data
	}
}

export const updateCity=(data)=>{
	return {
		type:UPDATE_CITY,
		data
	}
}