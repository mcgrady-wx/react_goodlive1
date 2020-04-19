import React from 'react'
import api from '../../../api'
import SearchListView from "./SeachListView"
import LoadMore from "../../../components/LoadMore"

export default class SearchList extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = {
            searchData: [],
            hasMore:false,
            page:0
        }
    }
	
	componentDidMount(){
		// 获取城市、内容，再发送请求
		let city=this.props.city || localStorage.getItem("city")
		let content=this.props.content
		this.http(city,content,0)
	}
	//请求数据函数
	http(city,content,page){
		api.search.searchData(city,content,page)
			.then(res=>res.json())
			.then(data=>{
				this.setState({
					//数据合并
					searchData:this.state.searchData.concat(data.data),
					hasMore:data.hasMore,
                    page:this.state.page+1
				})
			})
	}
	
	componentWillUpdate(prevProps, prevState){
		// 再次做网络请求就可以了
		let city=this.props.city || localStorage.getItem("city")
		let content=this.props.content
		//console.log(content)
		//console.log(prevProps.content)// 上一次的props
		if (prevProps.content===content) {
			return;
		}
		this.http(city,prevProps.content,0)
	}
	
	render(){
		return (
			<div>
				{
                    this.state.searchData ?
                        <SearchListView data={this.state.searchData} />
                        : <div>数据正在加载...</div>
                }
                {
                    this.state.hasMore ?
                    <LoadMore onLoadMore={this.loadMoreHandler.bind(this)}/>
                    : <div>被你看光了!</div>
                }
			</div>
		)
	}
	
	loadMoreHandler(){
		//加载更多
		let city=this.props.city || localStorage.getItem("city")
		let content=this.props.content
		this.http(city,content,this.state.page)
	}
}
