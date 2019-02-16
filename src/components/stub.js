import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './stub.css'

const Stub = ({ title, desc, date, theme, link }) => (
  <Link to={link ? link : '/'}>
  <div className={'stub ' + theme} title={false ? title : ''}>
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
  theme: PropTypes.string,
  link: PropTypes.node.isRequired,
}

export default Stub