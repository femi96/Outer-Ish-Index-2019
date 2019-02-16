import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const PanPage = () => (
  <Layout title='Gardens of Pan'>
    <div className='page_title'>Gardens of Pan</div>
    <div className='page_subtitle'>Simulated Monster Gardens</div>

    <div className='paragraph'><p>Designed and developed a video game based around creating and managing a garden full of monsters. The game features multiple species of monsters, each with their own unique behaviors, as well plants, produce, and elemental terrain. The game explores concepts of ecology and synergy in a uniquely entertaining way.</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><ALink href='https://drive.google.com/file/d/1Roo4RMmNIff4LI1wZM9OuB0JYKNQgJTg/view'>Windows Build v0.0.4</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default PanPage
