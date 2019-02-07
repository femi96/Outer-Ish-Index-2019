import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './stub.css'

const Stub = ({ title, desc, date, image, link }) => (
  <Link to={link ? link : '/'}>
  <div className='stub' title={title ? title : ''}>
    <div className='stub_date'>{date}</div>
    <div className='stub_title'>{title}</div>
    <div className='stub_desc'>{desc}</div>
  </div>
  </Link>
)

Stub.propTypes = {
  title: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Stub