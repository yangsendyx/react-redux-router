
import React from 'react';
import { Link } from 'react-router';

import List from './List';

let Test_2 = React.createClass({
	handleFn() {
		this.props.actions.test2Show( !this.props.data.test2.show );
	},

	render() {
		let data = this.props.data.test2;
		let isShow = data.show;
		let text = isShow ? '关闭' : '显示';
		
		return (
			<div className="test_section" style={{ background: '#31d2b6' }}>
				<Link to="/test1">前往Test1</Link>
				<h2>这里是Test_2组件</h2>
				<p>这里是Test_2组件的描述信息</p>
				<button onClick={ this.handleFn }>{ text }数据</button>
				{ !isShow ? '' : <List data={ data.data }></List> }
			</div>
		);
	}
});

export default Test_2;