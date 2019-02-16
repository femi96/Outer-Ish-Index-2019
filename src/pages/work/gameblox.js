import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const GamebloxPage = () => (
  <Layout title='Gameblox'>
    <div className='page_title'>Gameblox</div>
    <div className='page_subtitle'>Playful, Powerful Learning</div>

    <div className='paragraph'><p>During the summers of 2017, I worked on the Gameblox project with the MIT Scheller Teacher Education Program Lab. Gameblox is a block-based programming encironment, developed by the STEP Lab. The environment is designed for making games online, and intended for classroom use. The novice friendly programming allows for students and teachers alike to create games and enhance the learning experience.</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><ALink href='https://gameblox.org/'>Gameblox</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default GamebloxPage
