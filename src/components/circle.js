import React from 'react'
import { Link } from 'gatsby'
// import Img from "gatsby-image"
import PropTypes from 'prop-types'

import './circle.css'

const Circle = ({ image, theme, text, link }) => (
  <Link to={link ? link : '/'}>
  <div className={'circ ' + theme} title={text ? text : ''}>
    <div className='circ_text'>{text ? text : 'N/A'}</div>
  </div>
  </Link>
)
    // <div className='circ_img'>{image ? image : 'N/A'}</div>
    // <div className='circ_text'>{text ? text : 'N/A'}</div>

Circle.propTypes = {
  image: PropTypes.node.isRequired,
  theme: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.node.isRequired,
}

export default Circle