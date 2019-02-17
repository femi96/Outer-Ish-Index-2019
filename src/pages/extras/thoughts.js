import React from 'react'

import Layout from '../../components/layout'
import Stub from '../../components/stub'

const ThoughtsPage = () => (
  <Layout title='Thoughts'>
    <div className='page_title'>Thoughts</div>
    <div className='page_subtitle'>A Work in Progress</div>

    <div className='content_block'>
    <div className='stub_container'>
      <Stub
        title='"What is a Game?”'
        desc='Multi-Level Understanding of Games as Media'
        date='Dec 2016'
        theme=''
        link='/thoughts/whatisagame'>
      </Stub>
      <Stub
        title='An Examination of Comics'
        desc='An Examination of Comics by Comparison to other Mediums'
        date='Nov 2016'
        theme=''
        link='/thoughts/comics'>
      </Stub>
    </div>
    </div>
  </Layout>
)

export default ThoughtsPage
