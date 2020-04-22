import React from 'react'
import {Route,HashRouter,Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Life from '../pages/Life'
import Mine from '../pages/Mine'
import Shop from '../pages/Shop'
import City from '../pages/City'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Details from '../pages/Details'
import NotFound from '../pages/NotFound'
import App from '../pages/App'
 
export default class AppRouter extends React.Component{
	render(){
		return (
			<HashRouter>
				<App path="/">
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route path="/life" component={Life}></Route>
						<Route path="/mine" component={Mine}></Route>
						<Route path="/shop" component={Shop}></Route>
						<Route path="/city" component={City}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/search/:content" component={Search}></Route>
						<Route path="/details/:id" component={Details}></Route>
						<Route path="*" component={NotFound}></Route>
					</Switch>
				</App>
			</HashRouter>
		)
	}
}
