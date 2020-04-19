import React from 'react'
import "./style.less"

export default class HomeHotView extends React.Component{
	render(){
		let data=this.props.data
		let title=this.props.title
		return (
			<div className="hotproduct">
				<h3>{title}</h3>
				<div className="hot-container">
					<ul className="clear-fix">
						{
							data.map((element,idnex)=>{
								return (
									<li	key={element.id}>
										<a href={element.link}>
											<img src={element.img} alt={ element.title } />
											<span>{ element.title }</span>
										</a>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}
