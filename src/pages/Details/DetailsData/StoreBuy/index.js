import React from 'react'
import StoreBuyView from './StoreBuyView'
import {withRouter} from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as collectActions from "../../../../store/actions/collect"



 /**
     * 详情页视图页面 - >收藏与购买的业务逻辑 -> 收藏与购买的视图
     * 
     */

class StoreBuy extends React.Component{
	constructor(){
		super();
		this.state={
			 collected:false
		}
	}
	// 设置收藏的值
	componentDidMount(){
		this.setState({
                    collected:this.isStore()
                })
	}
    storeHandler() {
    	if (this.props.userinfo.name) {
    		//console.log("收藏");
    		 /**
             *  true:收藏了
             *  false:为收藏
             */
    		if (this.isStore()) {
    			// 取消收藏
    			this.props.collectActions.cancelCollect({
	    			id:this.props.id
	    		})
    			this.setState({
                    collected:false
                })
    		} else{
    			// 添加收藏
    			this.props.collectActions.setCollect({
	    			id:this.props.id
	    		})
    			this.setState({
                    collected:true
                })
    		}
    	} else {
    		//去登录
    		this.props.history.push('/login')
    	}
    }
   	/**
     * 收藏判断
     */
   	isStore(){
   		let id=this.props.id
   		let collects=this.props.collect
   		return collects.some((element)=>{
   			return element.id===id
   		})
   	}
    BuyHandler() {
        console.log("购买");
    }
	render(){
		return (
			<div>
				<StoreBuyView 
					onStoreHandler={this.storeHandler.bind(this)}
                    onBuyHandler={this.BuyHandler.bind(this)}
                    collected={this.state.collected}
				/>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		userinfo:state.userinfo,
		collect:state.collect
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		collectActions:bindActionCreators(collectActions,dispatch)
	}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(StoreBuy))