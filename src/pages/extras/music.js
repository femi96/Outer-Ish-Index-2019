import React from 'react'

import Layout from '../../components/layout'

const ClevrPage = () => (
  <Layout title='Clevr'>
    <div className='page_title'>Clevr</div>
    <div className='page_subtitle'>Collaborative Learning Experiences in Virtual Reality</div>

    <div className='paragraph'><p>Developed a 3D cell environment, with navigation tools and network functionality for STEP Lab’s CLEVR. CLEVR is a project designed to create learning experience in virtual reality, supported by Oculus and the MIT GameLab. The unique affordances of VR have helped to dispel some of the misconceptions about molecular biology, while the networking capabilities have improved the project’s viability as a classroom tool.</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
        <li><a href='https://education.mit.edu/project/clevr/'>MIT Scheller Teacher Education Program - Clevr</a></li>
    </ul>
    </div>
  </Layout>
)

export default ClevrPage
