
require('./assets/less/main');

const React = require('react');
const { render } = require('react-dom');
const { createStore, combineReducers } = require('redux');
const { Provider } = require('react-redux');
const { Router, Route, IndexRoute } = require('react-router');
const createHistory = require('history/lib/createHashHistory');
const { syncReduxAndRouter, routeReducer } = require('redux-simple-router');

const App = require('./container/App');
const Test_1 = require('./components/Test_1');
const Test_2 = require('./components/Test_2');

const reducers = require('./reducers/index');
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const store = createStore(reducer);
const history = createHistory();
syncReduxAndRouter(history, store);

render(
	<Provider store={ store }>
		<Router history={ history }>
	      	<Route path="/" component={ App }>
	      		<IndexRoute component={ Test_1 }/>
		        <Route path="test1" component={ Test_1 }/>
		        <Route path="test2" component={ Test_2 }/>
	      	</Route>
	    </Router>
  	</Provider>,
	document.getElementById('app')
);