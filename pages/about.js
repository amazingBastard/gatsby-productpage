import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import About from 'containers/about';

const style = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    padding: 0,
    paddingBottom: rhythm(2)
  }
};

class AboutIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'About page title.'
    };
    const about = {
      title: 'About page sub title. Edit in: /pages/about.js'
    }

    return (
      <DocumentTitle title={`${config.siteTitle} | Who we are`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <About route={route} meta={about} />
        </main>
      </DocumentTitle>
    );
  }
}

AboutIndex.propTypes = {
  route: PropTypes.object
};

export default AboutIndex;
