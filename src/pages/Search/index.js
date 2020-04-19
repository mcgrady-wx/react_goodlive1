import React from 'react'
import SearchHeader from './SearchHeader'
import SearchList from './SearchList'
import { connect } from "react-redux"

class Search extends React.Component{
	render(){
		const content=this.props.match.params.content
		return (
			<div>
				<SearchHeader />
				<SearchList city={this.props.city.cityName} content={content}/>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		city:state.city
	}
}

export default connect(mapStateToProps)(Search)
