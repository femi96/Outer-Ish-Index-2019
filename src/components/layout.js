import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import favicon16 from '../images/oii-icon.png'
import favicon32 from '../images/oii-icon.png'
import favicon64 from '../images/oii-icon.png'

import twittericon from '../images/twitter-icon.png'
import githubicon from '../images/github-icon.png'

import './layout.css'
import './listblock.css'
import ALink from './alink'

const Layout = ({ children, title }) => (
  <div className='wrapper'>
    <Helmet
      title={title ? 'Femi Oladipupo | ' + title : 'Femi Oladipupo'}
      meta={[
        { name: 'description', content: 'Femi Oladipupo - Software Engineer and Game Developer' },
        { name: 'keywords', content: 'femi oladipupo oluwafemi game developer software engineer pan' }
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
      ]}
    >
    </Helmet>

    <div className='main'>

      <div className='header'>
        <Link to='/' title=''><h1 className='header_title link_text'>Femi Oladipupo</h1></Link>
        <hr></hr>
      </div>

      <div className='content'>{ children }</div>

      <div className='footer'>
        <hr></hr>

        <div className='footer_content'>
        <div className='footer_icon_con'>
          <ALink title='Github @femi96' href='https://github.com/femi96'>
            <img className='footer_icon' src={githubicon} alt='GitHub Icon'/>
          </ALink>
        </div>
        
        <div className='footer_icon_con'>
          <ALink title='Twitter @imef96' href='https://twitter.com/imef96'>
            <img className='footer_icon' src={twittericon} alt='Twitter Icon'/>
          </ALink>
        </div>

        <div className='footer_text'>
          <Link to='/' title='' className='link_text'>Femi Oladipupo</Link>
          <span style={{color:'#828282'}}> © {new Date().getFullYear()}</span>
        </div>

        <div className='footer_text_r'>
          <Link to='/resume'>Resume</Link>
        </div>
        </div>
      </div>

    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout