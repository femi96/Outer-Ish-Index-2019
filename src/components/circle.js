import React from 'react'
import { Link } from 'gatsby'
// import Img from "gatsby-image"
import PropTypes from 'prop-types'

import './circle.css'

const Circle = ({ image, theme, char, alt, link }) => (
  <Link to={link ? link : '/'}>
  <div className={'circ ' + theme} title={alt ? alt : ''}>
    {char ? char : 'N/A'}
  </div>
  </Link>
)

Circle.propTypes = {
  image: PropTypes.node.isRequired,
  theme: PropTypes.string,
  char: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Circle