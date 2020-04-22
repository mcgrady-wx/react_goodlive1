import * as collectActions from "../consts/collect"

//收藏
export function setCollect(data){
	return {
		type:collectActions.COLLECT,
		data
	}
}
//取消收藏
export function cancelCollect(data){
	return {
		type:collectActions.UNCOLLECT,
		data
	}
}
