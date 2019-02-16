import React from 'react'
import PropTypes from 'prop-types'

const ALink = ({ children, title, href }) => (
  <a className='link_text' title={ title } href={ href } rel='noopener noreferrer' target='_blank'>
    { children }
  </a>
)

ALink.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.string,
  href: PropTypes.node.isRequired,
}

export default ALink