import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import stubStyles from './stub.css'

const Stub = ({ title, desc, date, image, alt, link }) => (
  <Link to="/"><div className='stub'
    style={{backgroundImage: `url(${image})`}}>
  <div className='stub_date'>{date}</div>
  <div className='stub_title'>{title}</div>
  <div className='stub_desc'>{desc}</div>
  </div></Link>
)

Stub.propTypes = {
  title: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Stub