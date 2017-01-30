import React, { Component, PropTypes } from 'react';

import Header from 'containers/header/';
import Footer from 'containers/footer/';

import 'stylesheets/elements.css';
import 'stylesheets/animations.css';

const style = {
  template: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    margin: '0 auto',
    padding: 0,
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  content: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    zIndex: 2,
    backgroundColor: '#fff'
  }
};

class Template extends Component {
  render() {
    const { location, route, children } = this.props;

    return (
      <main className="main template" style={style.template}>
        <Header location={location} route={route}/>
        <main className="main content" style={style.content}>
          {children}
        </main>
        <Footer location={location} route={route}/>
      </main>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object
};

export default Template;
