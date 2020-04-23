import React from 'react'
import api from '../../../../api'
import './style.less'



export default class Item extends React.Component {
	
	constructor(){
		super();
		this.state={
			commentState:0
		};
		//非受控组件
		this.commentText = React.createRef();
	}
	//设置commentState的值
	componentDidMount(){
		this.setState({
			commentState:this.props.data.commentState
		})
	}
	//点击改变commentState的值，显示评论框
	commentHandler(){
		this.setState({
			commentState:1
		})
	}
	//提交评价
	submitCommentHandler(){
		this.setState({
			commentState:2
		})
		//console.log(this.commentText.current.value)
		// 发送评论到后台
		api.ordercomment.ordercommentData({
			info:this.commentText.current.value
		})
		.then(res=>res.json())
		.then(data=>{
			//console.log(data.msg)
			alert(data.msg)
		})
	}
	//取消评论
	hideComment(){
		this.setState({
			commentState:0
		})
	}
	
    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                        <button className="btn" onClick={this.commentHandler.bind(this)}>评价</button>
                        :this.state.commentState === 1?
                        <button className="btn">评价中</button>
                        :<button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {/*提交表单*/}
                {
                    this.state.commentState === 1 ?
                    <div className="comment-text-container">
                    <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={ this.commentText }></textarea>
                    <button className="btn" onClick={this.submitCommentHandler.bind(this)}>提交</button>
                    &nbsp;
                            <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    :  ""
                }
            </div>
        )
    }
}