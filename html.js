import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';
import typography from './utils/typography';

const BUILD_TIME = new Date().getTime();

class Html extends Component {
    render () {
        const { title, body } = this.props;

        let css;

        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }}/>
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content={config.siteDescription} />
                    <title>{title || DocumentTitle.rewind()}</title>
                    <TypographyStyle typography={typography}/>
                    <GoogleFont typography={typography}/>
                    {css}
                </head>
                <body>
                    <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }}/>
                    <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)}/>
                </body>
            </html>
        );
    }
}

Html.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};

Html.defaultProps = { body: '' };

export default Html;
