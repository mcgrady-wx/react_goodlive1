import React from 'react'
import api from '../../api'
import OrderView from "./OrderView"
import UserView from "./UserView"
import ShopCarHeader from "../../components/Header"
import { connect } from "react-redux"


class ShopCar extends React.Component{
	
	constructor(){
		super();
		this.state={
			order:[]
		}
	}
	
	componentDidMount(){
		// 判断是否登陆
		const user =this.props.userinfo.name
		if (user) {
			// 网络请求购物车数据
			api.order.orderData(user)
				.then(res=>res.json())
				.then(data=>{
					//console.log(data)
					this.setState({
	                    order:data
	                })
				})
		} else{
			this.props.history.push("/login")
		}
	}
	
	render(){
		return (
			<div>
				<ShopCarHeader title="购物车"/>
                <UserView user={this.props.userinfo.name} city={this.props.city.cityName}/>
                <OrderView data={this.state.order}/>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		userinfo:state.userinfo,
		city:state.city
	}
}

export default connect(mapStateToProps)(ShopCar)
