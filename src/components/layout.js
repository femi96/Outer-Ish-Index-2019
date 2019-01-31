import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import favicon16 from "../images/oii-icon.png"
import favicon32 from "../images/oii-icon.png"
import favicon64 from "../images/oii-icon.png"

import layoutStyles from './layout.css'

const Layout = ({ children, title }) => (
  <div className='wrapper'>
    <Helmet
      title={title ? 'Femi Oladipupo | ' + title : 'Femi Oladipupo'}
      meta={[
        { name: 'description', content: 'Femi Oladipupo - Software Engineer and Game Developer' },
        { name: 'keywords', content: 'femi oladipupo oluwafemi game developer software engineer pan' }
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
      ]}
    >
    </Helmet>

    <div className='main'>

      <div className='header'>
        <h1 class='header_title'>Femi Oladipupo</h1>
        <hr></hr>
        <nav><ul class='header_menu'>
          <li class='header_menuItem'><Link to="/">ABC</Link></li>
          <li class='header_menuItem'><Link to="/">DEF</Link></li>
          <li class='header_menuItem'><Link to="/">GHI</Link></li>
        </ul></nav>
        <hr></hr>
      </div>

      { children }

      <div className='footer'>
        <hr></hr>
        <div className='footer_end'>Femi Oladipupo <span style={{color:'#828282'}}>©2019</span></div>
      </div>

    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
}

export default Layout