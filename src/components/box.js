import React from 'react'
// import { Link } from 'gatsby'
// import Img from "gatsby-image"
import PropTypes from 'prop-types'

import './box.css'
import ALink from './alink'

const Box = ({ text, theme, author, link }) => (
  <ALink href={link}>
  <div className={'box ' + theme}>
    <div className='box_textbox'/>
    {author ? <div className='box_author'>{author}</div> : ''}
    <div className='box_text'>{text}</div>
  </div>
  </ALink>
)

Box.propTypes = {
  text: PropTypes.node.isRequired,
  theme: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.node.isRequired,
}

export default Box