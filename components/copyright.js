import React, { Component, PropTypes } from 'react';
import { rhythm, fontSizeToMS } from 'utils/typography';

class Copyright extends Component {
	render() {
		const { meta } = this.props;

		return (
			<figure className="copyright figure">
				<p className="message">
          &copy; {meta.year}, <span dangerouslySetInnerHTML={{__html: meta.message}}/>
        </p>
			</figure>
		);
	}
};

Copyright.propTypes = {
	meta: PropTypes.object
};

export default Copyright;
