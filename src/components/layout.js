import React from 'react'
import PropTypes from 'prop-types'

import layoutStyles from './layout.css'

const Layout = ({ children }) => (
  <div className='wrapper'>
    <div className='main'>
      { children }
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout