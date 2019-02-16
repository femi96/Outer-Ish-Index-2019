import React from 'react'

import Stub from '../components/stub'

const Work = () => (
  <div className='stub_container'>
    <Stub
      title='PocketGems'
      desc='Pioneering Mobile Games'
      date='Jan 2019'
      theme='stub_theme_a'
      link='/work/pocketgems'>
    </Stub>
    <Stub
      title='Clevr'
      desc='Collaborative Learning Experiences in VR'
      date='Jan 2018 - Present'
      theme='lul'
      link='/work/clevr'>
    </Stub>
    <Stub
      title='Gameblox'
      desc='Playful, Powerful Learning'
      date='Jun 2017 - Aug 2017'
      theme='lul'
      link='/work/gameblox'>
    </Stub>
    <Stub
      title='PubPub'
      desc='Open, Continuous Publishing'
      date='Jun 2015 - Aug 2016'
      theme='lul'
      link='/work/pubpub'>
    </Stub>
    <Stub
      title='DataTapestry'
      desc='Earth Tapestry Data Exploration'
      date='Jun 2015'
      theme='lul'
      link='/work/datatapestry'>
    </Stub>
  </div>
)

Work.propTypes = {}

export default Work