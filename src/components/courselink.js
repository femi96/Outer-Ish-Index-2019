import React from 'react'
import PropTypes from 'prop-types'

import ALink from './alink'

const CourseLink = ({ number, text }) => (
  <ALink href={'http://student.mit.edu/catalog/search.cgi?search=' + number} title={text}><span>{number}</span> {text}</ALink>
)

CourseLink.propTypes = {
  number: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
}

export default CourseLink