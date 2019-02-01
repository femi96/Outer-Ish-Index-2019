import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Work from '../components/work'
import Projects from '../components/projects'
import Extras from '../components/extras'

const IndexPage = () => (
  <Layout>
    <div className='paragraph'>I’m Femi Oladipupo, an MIT Senior pursuing a Bachelor of Science in Computer Science and Engineering (Course 6-3) as well as a minor in Comparative Media Studies (Course CMS).</div>

    <div className='paragraph'>I have about 7 years of programming experience. I started with amateur game development projects in high school, and continued in university through coursework and undergraduate research.</div>
    
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
