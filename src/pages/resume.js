import React from 'react'

import Layout from '../components/layout'
import resume from './resume.pdf'

const ResumePage = () => (
  <Layout title='Resume'>
    <div className='page_title'>Resume</div>

    <div className='content_block'>
    <iframe title='Resume iframe' src={resume} frameborder="0"></iframe>
    </div>
  </Layout>
)

export default ResumePage
