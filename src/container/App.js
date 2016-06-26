
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/action';

import { AjaxGet, AjaxPost } from '../utils/util';

function isIE(ver){
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
}

let App = React.createClass ({
	componentDidMount() {
		// 测试IE8请求结果
		AjaxGet('/test', function(data) {
			alert( JSON.stringify(data) );
			AjaxPost('/test', {a: 'a', b:[1,2], c: 3}, function(data) {
				alert( JSON.stringify(data) );
			});
		});
	},

	render() {
		const { dispatch, test1, test2 } = this.props;
  		const data = { test1: test1, test2: test2 };
		const actions = bindActionCreators(Actions, dispatch);

		const isLowIe = isIE(8) || isIE(9) ? true : false;
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