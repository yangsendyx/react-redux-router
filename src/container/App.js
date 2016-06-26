
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/action';

import { AjaxGet, AjaxPost } from '../utils/util';

function isIE(ver){
    let b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
}

let App = React.createClass ({
	getInitialState() {
		return { ie8: isIE(8), ie9: isIE(9) };
	},

	componentDidMount() {
		const _this = this;
		AjaxGet('/test', function(data) {
			// 测试IE8请求结果
			if( _this.state.ie8 ) {
				alert( JSON.stringify(data) );
			} else {
				console.log( data );
			}
			AjaxPost('/test', {a: 'a', b:[1,2], c: 3}, function(data) {
				if( _this.state.ie8 ) return alert( JSON.stringify(data) );
				console.log( data );
			});
		});
	},

	render() {
		const { dispatch, test1, test2 } = this.props;
  		const data = { test1: test1, test2: test2 };
		const actions = bindActionCreators(Actions, dispatch);

		const isLowIe = this.state.ie8 || this.state.ie9 ? true : false;
		const name = isLowIe ? '' : 'example';
		const time = isLowIe ? 0 : 800;
		
		return (
			<ReactCSSTransitionGroup
				className="container-wrap"
                component="div"
                transitionName={ name }
                transitionEnterTimeout={ time }
                transitionLeaveTimeout={ time } >
                {
                	React.cloneElement(this.props.children, {
                        key: this.props.location.pathname,
                        actions: actions,
                        data: data
                    })
                }
            </ReactCSSTransitionGroup>
		);
	}
});

let select = (state) => {
	return {
		test1: state.test1,
		test2: state.test2
	};
};

export default connect(select)(App);