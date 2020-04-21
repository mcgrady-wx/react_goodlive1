import React from "react"
import api from "../../../api"
import DetailsDataView from './DetailsDataView'

export default class DetailsData extends React.Component{
	
	constructor(){
		super();
		this.state={
			datas:{},
			comments:[]
		}
	}

    componentDidMount(){
    	// 列表数据
    	let id=this.props.id
    	api.details.detailsData(id)
    		.then(res => res.json())
	        .then(data => {
	            this.setState({
	                datas:data
	            })
	        })
	    //评价数据
	    api.comment.commentData(id)
    		.then(res => res.json())
	        .then(data => {
	            this.setState({
	                comments:data.data
	            })
	        })
    }
    
    render(){
        return(
            <div>
                {
                    this.state.datas.imgs && this.state.comments ?
                    <DetailsDataView data={ this.state.datas } comments={ this.state.comments } />
                    : <div>数据请求中</div>
                }
            </div>
        )
    }
}