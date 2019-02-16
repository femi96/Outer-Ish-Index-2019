import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const PubPubPage = () => (
  <Layout title='PubPub'>
    <div className='page_title'>PubPub</div>
    <div className='page_subtitle'>Open, Continuous Publishing</div>

    <div className='paragraph'><p>During the summers of 2015 & 2016, I contributed to the development of Viral Communication’s project, “PubPub.” PubPub is an open source academic publishing platform. The contributions developed included a frontend file uploading interface, a text editor, a backend analytics route, and a front end visualization. The original iteration of the project was built using AngularJS, but prior to the open source release, PubPub was converted to a React, Redux, and Immutable setup.</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><ALink href='https://www.pubpub.org/'>PubPub</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default PubPubPage
