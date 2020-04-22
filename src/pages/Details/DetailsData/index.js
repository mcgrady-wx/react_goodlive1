import React from "react"
import api from "../../../api"
import DetailsDataView from './DetailsDataView'

export default class DetailsData extends React.Component{
	
	constructor(){
		super();
		this.state={
			datas:{},
			comments:[],
			hasMore:false,
            page:0
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
	    this.http(id,0)
    }
    //加载评价数据函数
    http(id,page){
    	api.comment.commentData(id,page)
    		.then(res => res.json())
	        .then(data => {
	            this.setState({
	                comments:this.state.comments.concat(data.data),
	                hasMore:data.hasMore,
            		page:this.state.page+1
	            })
	        })
    }
    //加载更多评价
    LoadMore(){
    	let id=this.props.id
    	this.http(id,this.state.page)
    }
    render(){
        return(
            <div>
                {
                    this.state.datas.imgs && this.state.comments ?
                    <DetailsDataView id={this.props.id} data={ this.state.datas } comments={ this.state.comments } onLoadMore={this.LoadMore.bind(this)}/>
                    : <div>数据请求中</div>
                }
            </div>
        )
    }
}