import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Work from '../components/work'
import Projects from '../components/projects'
import Extras from '../components/extras'

const IndexPage = () => (
  <Layout>
    <div className='paragraph_unindent'>I'm Femi Oladipupo, an MIT senior completing a bachelor's degree in Computer Science and Engineering (6-3) with a minor in Comparative Media Studies (CMS).</div>

    <div className='paragraph_unindent'>I have about 7 years of programming experience, starting with amateur game development in high school, and continuing in university through coursework and undergraduate research.</div>
    
    <hr></hr>
    <div className='title'>Work</div>
    <hr></hr>

    <div className='content_block'><Work></Work></div>
    
    <hr></hr>
    <div className='title'>Projects</div>
    <hr></hr>

    <div className='content_block'><Projects></Projects></div>
    
    <hr></hr>
    <div className='title'>Extras</div>
    <hr></hr>

    <div className='content_block'><Extras></Extras></div>
  </Layout>
)

export default IndexPage
