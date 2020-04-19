import React from 'react'
import SwipeableViews from 'react-swipeable-views';//轮播图插件
import { autoPlay } from 'react-swipeable-views-utils';//自动轮播
import Pagination from './Pagination'//轮播的圆点
import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Swiper extends React.Component{
	constructor(){
		super();
		this.state={
			 currentIndex:0
		}
	}
	render(){
		let banners=this.props.banners
		return (
			<div className="swiper">
				<AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex.bind(this)}>
					{
						banners.map((element,index)=>{
							return (
								<div className="swiper-view" key={index}>
									<img src={element} />
								</div>
							)
						})
					}
				</AutoPlaySwipeableViews>
				<Pagination index={this.state.currentIndex} num={banners.length}/>
			</div>
		)
	}
	handleChangeIndex(index){
		this.setState({
			currentIndex:index
		})
	}
}