import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';
import Product from 'components/product';
import { prefixLink } from 'gatsby-helpers'

import 'containers/products/index.css';

class Products extends Component {
  renderProducts() {
    const { route } = this.props;
    const pages = route.pages;
    const path = route.page.path;

		let products;

		const productsList = [];
		const sortedProducts = sortBy(pages, (page) => access(page, 'data.id')
		).reverse();

		sortedProducts.forEach((product) => {
				if (access(product, 'file.ext') === 'md' && access(product, 'data.layout') === 'product' && !include(product.path, '/404')) {
					productsList.push(<Product meta={product} key={product.path} />);
				}
		});

		if (path === prefixLink('/')) {
			products = (
				<ul className="featured products flex list">
					{productsList.slice(0,3)}
				</ul>
			);
		} else {
			products = (
				<ul className="products flex list">
					{productsList}
				</ul>
			);
		}

		return products;
  }

	render() {
		return (
      <section className="fluid products section">
        <figure className="figure container">
          {this.renderProducts()}
        </figure>
      </section>
    );
	}
};

Products.propTypes = {
	meta: PropTypes.object,
  route: PropTypes.object
};

export default Products;
