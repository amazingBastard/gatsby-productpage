import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import moment from 'moment';
import Hero from '../containers/hero';
import { fixLinks } from 'utils';
import { rhythm } from 'utils/typography';
import { config } from 'config';

const style = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    padding: 0,
    paddingBottom: rhythm(2)
  },
  article: {
    minHeight: '25vh',
    padding: rhythm(1 / 2)
  }
}

class MarkdownWrapper extends Component {
  componentDidMount() {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render() {
    const { route } = this.props;
    const data = route.page.data;
    const date = moment(data.date).calendar().toLowerCase();
    const hero = {
      title: data.title,
      date: date,
      image: data.image
    };

    let layout;

    if (data.layout === 'project') {
      layout = (
        <DocumentTitle title={data.title ? `${config.siteTitle} | ${data.title}` : config.siteTitle}>
          <main className="work markdown page" style={style.page}>
            <Hero meta={hero} route={route}/>
            <article className="markdown article" ref="markdown" dangerouslySetInnerHTML={{__html: data.body}} style={style.article} />
          </main>
        </DocumentTitle>
      );
    } else {
      layout = (
        <DocumentTitle title={data.title ? `${config.siteTitle} | ${data.title}` : config.siteTitle}>
          <main className="blog markdown page" style={style.page}>
            <Hero meta={hero} route={route}/>
            <article className="markdown article" ref="markdown" dangerouslySetInnerHTML={{__html: data.body}} style={style.article} />
          </main>
        </DocumentTitle>
      );
    }

    return layout;
  }
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object
};

MarkdownWrapper.contextTypes = {
  router: PropTypes.object.isRequired
};

export default MarkdownWrapper;
