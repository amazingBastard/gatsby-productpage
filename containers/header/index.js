import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'containers/header/index.css';

class Header extends Component {
  render() {
    const { location } = this.props;

    let header;

    if (location.pathname === prefixLink('/')) {
      header = (
        <header className="index header">
          <Headroom disableInlineStyles>
            <Link className="link" to={prefixLink('/')}>
              <img className="logo image" src={prefixLink('/images/logo.png')} />
            </Link>
          </Headroom>
        </header>
      );
    } else {
      // optional: different headers for other pages
      header = (
        <header className="header">
          <Headroom disableInlineStyles>
            <Link className="link" to={prefixLink('/')}>
              <img className="logo image" src={prefixLink('/images/logo.png')} />
            </Link>
          </Headroom>
        </header>
      );
    }

    return header;
  }
}

Header.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
};

export default Header;
