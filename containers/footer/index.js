import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import include from 'underscore.string/include';
import find from 'lodash/find';
import Next from 'containers/next';
import Copyright from 'components/copyright';
import { config } from 'config';

import 'containers/footer/index.css';

class Footer extends Component {
  render() {
    const { location, route } = this.props;
    const copyright = {
      year: moment().year(),
      message: config.copyrightMessage
    };

    let footer;

    if (include(location.pathname, '/blog/') || include(location.pathname, '/work/')) {
      const page = find(route.pages, { 'path': location.pathname});

      footer = (
        <footer className="footer article">
          <Next data={page.data} pages={route.pages}/>
          <Copyright meta={copyright} />
        </footer>
      );
    } else {
      footer = (
        <footer className="footer">
          <Copyright meta={copyright} />
        </footer>
      );
    }

    return footer;
  }
}

Footer.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
};

export default Footer;
