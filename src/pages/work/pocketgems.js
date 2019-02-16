import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const PocketGemsPage = () => (
  <Layout title='Pocket Gems'>
    <div className='page_title'>Pocket Gems</div>
    <div className='page_subtitle'>Pioneering Mobile Games</div>

    <div className='paragraph'><p>Work in progress</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><ALink href='https://pocketgems.com/'>Pocket Gems</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default PocketGemsPage
