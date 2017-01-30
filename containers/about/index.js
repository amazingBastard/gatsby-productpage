import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import access from 'safe-access';
import find from 'lodash/find';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';

import 'containers/about/index.css';

class About extends Component {
  render() {
    const { meta, route } = this.props;
    const pages = route.pages;
    const page = route.page;
    const aboutPage = find(pages, {requirePath: "about/index.md"});

    let about;

    if (page.path === prefixLink('/')) {
      about = (
        <section className="fluid featured about section">
  				<figure className="image figure">
  					<img className="image" src={aboutPage.data.image} />
  				</figure>
  				<figure className="about figure">
            <h4 className="title">{meta.title}</h4>
  					<p className="paragraph">
              {aboutPage.data.summary}
            </p>
            <Link className="link" to={aboutPage.data.path}>Click here to find out more...</Link>
          </figure>
        </section>
      );
    } else {

      about = (
        <section className="about section">
          <h3 className="title">{meta.title}</h3>
          <article className="markdown article" ref="markdown" dangerouslySetInnerHTML={{__html: aboutPage.data.body}} />
        </section>
      );
    }

    return about;
  }
}

About.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default About;
