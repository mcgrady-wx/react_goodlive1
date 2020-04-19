import React from 'react'
import CityHeader from '../../components/Header'
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import * as cityActions from '../../store/actions/city'

class City extends React.Component{
	render(){
		return (
			<div>
				<CityHeader title="城市选择" />
				<CurrentCity city={this.props.city.cityName}/>
				<HotCity onCityNameHandler={this.onCityNameHandler}/>
			</div>
		)
	}
	onCityNameHandler=(cityName)=>{
		this.props.cityActions.updateCity({cityName:cityName})
		// 返回到上一个页面
        window.history.back(-1);
        // 用户修改城市，需要存储
        localStorage.setItem("city",cityName)
	}
}

const mapStateToProps=(state)=>{
	return {
		city:state.city
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		cityActions:bindActionCreators(cityActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(City)