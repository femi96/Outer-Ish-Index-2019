import React from 'react'

import Stub from '../components/stub'

const Projects = () => (
  <div className='stub_container'>
    <Stub
      title='Fabula-Lupus'
      desc='Tactics Game'
      date='Dec 2018 - Present'
      image='../images/oii-icon.png'
      link='/fabula-lupus'>
    </Stub>
    <Stub
      title='Gardens of Pan'
      desc='Simulated Monster Gardens'
      date='Feb 2018 - Present'
      image='../images/oii-icon.png'
      link='/gardens-of-pan'>
    </Stub>
    <Stub
      title='Graphics Garden'
      desc='Procedurally Generated Flora'
      date='Nov 2018 - Dec 2018'
      image='../images/oii-icon.png'
      link='/graphics-garden'>
    </Stub>
    <Stub
      title='So Much Simplicity (SMS)'
      desc='Low Vision Texting on Android'
      date='Oct 2018 - Dec 2018'
      image='../images/oii-icon.png'
      link='/sms'>
    </Stub>
    <Stub
      title='ModuleCG'
      desc='Action-Programming Card Game'
      date='Dec 2015'
      image='../images/oii-icon.png'
      link='/modulecg'>
    </Stub>
  </div>
)

Projects.propTypes = {}

export default Projects