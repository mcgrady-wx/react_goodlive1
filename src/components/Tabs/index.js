import React from 'react'
import './style.less'
/**
     * 内容非固定，需要获取具体的div结构 获取结构的方式是this.props.children
     * 参数形式：<div></div>
     * 
     * 引用结构
     * <tabs>
     *     <tab tabname="标题1">
     *         <div>内容1</div>
     *     </tab>
     *     <tab tabname="标题2">
     *         <div>内容2</div>    
     *     </tab>
     * </tabs>
     * 
     * 解析出来结构：
     * 
     * <div>
     * 	<div>标题1</div>
     * 	<div>标题2</div>
     * </div>
     * <div>
     * 	<div>内容1</div>
     *  <div>内容2</div>
     * </div>
     * 	
     * 遍历tabs的方法，两个参数，第一个为tabs中所有的tab this.props.children ，
     * 第二个为回调函数,element就是每一个tab组成的Object,获取title方式element.props.tabname
     * element.props.children表示每个tab下的内容
     * React.Children.map（this.props.children,(element,index)=>{
     * 		 return ()
     * }）
     * 
     */

export default class Tabs extends React.Component{
	
	constructor(){
		super();
		this.state={
			currentIndex:0
		}
	}
	//标题高亮显示
	check_title_index(index){
		return this.state.currentIndex===index?"Tab_title active":"Tab_title"
	}
	//显示对应内容
	check_item_index(index){
		return this.state.currentIndex===index?"show":"hide"
	}
	//点击高亮
	handlerClick(index){
		this.setState({
			currentIndex:index
		})
	}
	render(){
		return (
			<div>
				{/*显示标题*/}
				<div className="Tab_title_wrap">
					{
						React.Children.map(this.props.children,(element,index)=>{
							return (
								<div className={this.check_title_index(index)} onClick={this.handlerClick.bind(this,index)}>
									{element.props.name}
								</div>
							)
						})
					}
				</div>
				{/*显示内容*/}
				<div className="Tab_item_wrap">
					{
						React.Children.map(this.props.children,(element,index)=>{
							return (
								<div className={this.check_item_index(index)}>
									{element.props.children}
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}