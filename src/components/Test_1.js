
import React from 'react';
import { Link } from 'react-router';

import List from './List';

let Test_1 = React.createClass({
	handleFn() {
		this.props.actions.test1Show( !this.props.data.test1.show );
	},

	render() {
		let data = this.props.data.test1;
		let isShow = data.show;
		let text = isShow ? '关闭' : '显示';

		return (
			<div className="test_section" style={{ background: '#6cf' }}>
				<Link to="/test2">前往Test2</Link>
				<h2>这里是Test_1组件</h2>
				<p>这里是Test_1组件的描述信息</p>
				<button onClick={ this.handleFn }>{ text }数据</button>
				{ !isShow ? '' : <List data={ data.data }></List> }
			</div>
		);
	}
});

export default Test_1;