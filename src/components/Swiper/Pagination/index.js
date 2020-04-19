import React from 'react'
import "./style.less"



export default class Pagination extends React.Component{
	
	render(){
		let currentIndex=this.props.index
		let num=this.props.num
		let numArr=new Array(num).fill(1)
		return (
			<div className="swiper-pagination">
				<ul>
					{
						numArr.map((element,index)=>{
							return (
								<li className={currentIndex===index?"selected":''} key={index}></li>
							)
						})
					}
				</ul>
			</div>
		)
	}
	
}