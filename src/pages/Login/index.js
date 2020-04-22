import React from "react"
import LoginView from "./LoginView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userInfoActions from "../../store/actions/userinfo"

class Login extends React.Component{
	
	loginHandler(user){
        // 例如：user就是后台返回来的登陆信息  ( token:令牌 )
        // 用户信息的存储：redux\本地
        this.props.userInfoActions.loginUser({
        	name:user
        })
        // 返回上一个页面
        window.history.back(-1);
    }


    render(){
        return(
            <div>
                <LoginView onLoginHandler={ this.loginHandler.bind(this) }/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
	return {
		userinfo:state.userinfo
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		userInfoActions:bindActionCreators(userInfoActions,dispatch)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)