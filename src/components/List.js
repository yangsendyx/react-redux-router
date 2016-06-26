
import React from 'react';

let List = React.createClass({
	render() {
		return (
			<ul>
				{
					this.props.data.map((el, i) => {
						return <li key={ i }>{ el }</li>;
					})
				}
			</ul>
		);
	}
});

export default List;