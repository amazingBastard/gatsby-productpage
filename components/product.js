import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';

class Product extends Component {
	render () {
		const { meta } = this.props;

		return (
			<li className="product item">
				<Link className="post link" to={prefixLink(meta.path)}>
					<h4 className="title">
						{meta.data.title}
					</h4>
				</Link>
			</li>
		);
	}
}

Product.propTypes = {
	meta: PropTypes.object
}

export default Product;
