import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';
import Post from 'components/post';
import Title from 'components/title';
import { prefixLink } from 'gatsby-helpers'

import 'containers/blog/index.css';

class Blog extends Component {
  renderPosts() {
    const { route } = this.props;
    const pages = route.pages;
    const path = route.page.path;

		let posts;

		const postsList = [];
		const sortedPosts = sortBy(pages, (page) => access(page, 'data.date')
		).reverse();

		sortedPosts.forEach((post) => {
				if (access(post, 'file.ext') === 'md' && access(post, 'data.layout') === 'post' && !include(post.path, '/404')) {
					postsList.push(<Post meta={post} key={post.path} />);
				}
		});

		if (path === prefixLink('/')) {
			posts = (
				<ul className="featured posts flex list">
					{postsList.slice(0,3)}
				</ul>
			);
		} else {
			posts = (
				<ul className="posts flex list">
					{postsList}
				</ul>
			);
		}

		return posts;
  }

	render() {
    const title = {
      title: 'Blog'
    };

		return (
      <section className="blog section">
        <figure className="figure container">
          <Title meta={title} />
          {this.renderPosts()}
        </figure>
      </section>
    );
	}
};

Blog.propTypes = {
	meta: PropTypes.object,
  route: PropTypes.object
};

export default Blog;
