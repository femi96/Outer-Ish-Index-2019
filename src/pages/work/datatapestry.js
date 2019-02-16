import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const DataTapestryPage = () => (
  <Layout title='Data Tapestry'>
    <div className='page_title'>Data Tapestry</div>
    <div className='page_subtitle'>Earth Tapestry Data Exploration</div>

    <div className='paragraph'><p>During the summer of 2015, I developed an interactive visual data display for the Earth Tapestry project. Earth Tapestry is a project by Kevin Hu and Travis Rich done in collaboration with a team at Carnegie Mellon. It was built on top of Quantify, and the data display was developed to expand to other Quantify projects. The project was launched as Data Tapestry by the MIT Media Lab.</p></div>
    <div className='paragraph'><p>This project was my first introduction to web development, beyond user based web builders such as yolasite and wordpress. This website was built in HTML, CSS, and Javascript over the course of two weeks. While the site is compatible with the general Quantify data format, the visual elements of the display need modification if they are to be adapted to other projects.</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><ALink href='http://datatapestry.media.mit.edu/'>Data Tapestry Website</ALink></li>
        <li><ALink href='http://www.earthtapestry.org/about'>Earth Tapestry Website</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default DataTapestryPage
