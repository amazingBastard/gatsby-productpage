import React, { Component, PropTypes } from 'react';

class Title extends Component {
	render() {
		const { meta } = this.props;

		// @TODO: pass class type using props (i.e. index, hero, etc)
		// let className = meta.class;
		// className={className};
		return (
			<h2 className="title">
				{meta.title}
			</h2>
		);
	}
};

Title.propTypes = {
	meta: PropTypes.object
};

export default Title;
