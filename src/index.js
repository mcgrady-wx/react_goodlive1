import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/common.less'
import './static/css/font.css'
import './static/css/iconfont.css'
import AppRouter from "./router/AppRouter"

import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducers from './store/reducers'

const store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :undefined)

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById('root')
);

