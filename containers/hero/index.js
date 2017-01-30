import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import 'containers/hero/index.css';

class Hero extends Component {
  render() {
    const { meta, route } = this.props;
    const page = route.page;

    let hero;

    if (page.path === prefixLink('/')) {
      hero = (
        <section className="fluid index hero section">
          <figure className="figure container">
            <h1 className="title">
              {config.siteTitle}
              <small className="sub description">
                {config.siteDescription}
              </small>
            </h1>
          </figure>
        </section>
      );
    } else if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
      hero = (
        <section className="markdown hero section">
          <h2 className="title">
            {meta.title}
            <small className="sub meta date">
              {meta.date}
            </small>
          </h2>
        </section>
      );
    } else {
      hero = (
        <section className="hero section">
          <h2 className="title">
            {meta.title}
          </h2>
        </section>
      );
    }

    return hero;
  }
}

Hero.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Hero;
