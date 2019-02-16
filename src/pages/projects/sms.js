import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const SmsPage = () => (
  <Layout title='So Much Simplicity (SMS)'>
    <div className='page_title'>So Much Simplicity (SMS)</div>
    <div className='page_subtitle'>Low Vision Texting on Android</div>

    <div className='paragraph'><p>Work in progress</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><ALink href='https://github.com/dhruvika/LVTexting'>GitHub Repository</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default SmsPage
