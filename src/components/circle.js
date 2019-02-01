import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import PropTypes from 'prop-types'

import stubStyles from './circle.css'

const Circle = ({ image, alt, link }) => (
  <Link to="/">
  <div className='circ'
    style={{backgroundImage: `url(${image})`}}>
  </div>
  </Link>
)

Circle.propTypes = {
  image: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Circle