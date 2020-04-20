import React from "react"
import api from "../../../api"
import DetailsDataView from './DetailsDataView'

export default class DetailsData extends React.Component{
	
	constructor(){
		super();
		this.state={
			datas:{}
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
    }
    
    render(){
        return(
            <div>
                {
                    this.state.datas.imgs ?
                    <DetailsDataView data={ this.state.datas } />
                    : <div>数据请求中</div>
                }
            </div>
        )
    }
}