import React from "react"

export default class LoadMore extends React.Component {
	
	constructor() {
        super();
        this.load = React.createRef();
    }
	/**
     * 监听页面滚动事件
     */
	componentDidMount(){
		let _this=this
		let timer=null
		// 获取页面高度
		const winHeight=document.documentElement.clientHeight
		window.onscroll=(e)=>{
			//console.log(e)
			//console.log(this.load.current)
			// getBoundingClientRect:对象
			//防止抖动
			if (timer) {
				clearTimeout(timer)
			}
			timer=setTimeout(function(){
				if (_this.load.current.getBoundingClientRect().top < winHeight) {
                    // 该加载数据的时候
                    _this.props.onLoadMore();
                }
			},100)
		}
	}
	//组件卸载，需要重置state
	componentWillUnmount(){
		window.onscroll=null
	}
    render() {
        return (
            <div ref={this.load}>
               	加载更多  
            </div>
        )
    }
}