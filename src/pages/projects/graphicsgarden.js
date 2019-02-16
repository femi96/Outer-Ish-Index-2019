import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const GraphicsGardenPage = () => (
  <Layout title='Graphics Garden'>
    <div className='page_title'>Graphics Garden</div>
    <div className='page_subtitle'>Procedurally Generated Flora</div>

    <div className='paragraph'><p>Work in progress</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><ALink href='https://www.youtube.com/watch?v=Bebx5Gq46Zo'>Video Showcase</ALink></li>
        <li><ALink href='https://drive.google.com/file/d/14ORw32paO9pElKA7y8vDCyzjDC90iNcD/view'>Windows Build</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default GraphicsGardenPage
