import * as userActions from "../consts/userinfo"
//保存用户信息
export function loginUser(data){
	return {
		type:userActions.LOGIN_USERINFO,
		data
	}
}
//修改用户信息
export function updateUser(data){
	return {
		type:userActions.LOGIN_UPDATE,
		data
	}
}
