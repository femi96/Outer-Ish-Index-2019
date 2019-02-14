import React from 'react'

import Stub from '../components/stub'

const Work = () => (
  <div className='stub_container'>
    <Stub
      title='PocketGems'
      desc='Pioneering Mobile Games'
      date='Jan 2019'
      image='../images/oii-icon.png'
      link='/pocketgems'>
    </Stub>
    <Stub
      title='Clevr'
      desc='Collaborative Learning Experiences in VR'
      date='Jan 2018 - Present'
      image='lul'
      link='/clevr'>
    </Stub>
    <Stub
      title='Gameblox'
      desc='Playful, Powerful Learning'
      date='Jun 2017 - Aug 2017'
      image='lul'
      link='/gameblox'>
    </Stub>
    <Stub
      title='PubPub'
      desc='Open, Continuous Publishing'
      date='Jun 2015 - Aug 2016'
      image='lul'
      link='/pubpub'>
    </Stub>
    <Stub
      title='DataTapestry'
      desc='Earth Tapestry Data Exploration'
      date='Jun 2015'
      image='lul'
      link='/datatapestry'>
    </Stub>
  </div>
)

Work.propTypes = {}

export default Work