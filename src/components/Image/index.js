import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/* For use with gatsby via gatsby-plugin-sharp
 * has pre-existing className of "gatsby-image-wrapper"
 * See: https://www.gatsbyjs.org/docs/gatsby-image/ */
const Image = props => {
  const { alt, fixed, fluid } = props;
  return <Img fixed={fixed || null} fluid={fluid || null} alt={alt} {...props} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  fixed: PropTypes.any,
  fluid: PropTypes.any,
};

export default Image;
