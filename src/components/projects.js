import React from 'react'

import Stub from '../components/stub'

const Projects = () => (
  <div className='stub_container'>
    <Stub
      title='Fabula-Lupus'
      desc='Tactics Game'
      date='Dec 2018 - Present'
      theme='../images/oii-icon.png'
      link='/projects/fabulalupus'>
    </Stub>
    <Stub
      title='Gardens of Pan'
      desc='Simulated Monster Gardens'
      date='Feb 2018 - Present'
      theme='../images/oii-icon.png'
      link='/projects/pan'>
    </Stub>
    <Stub
      title='Graphics Garden'
      desc='Procedurally Generated Flora'
      date='Nov 2018 - Dec 2018'
      theme='../images/oii-icon.png'
      link='/projects/graphicsgarden'>
    </Stub>
    <Stub
      title='So Much Simplicity (SMS)'
      desc='Low Vision Texting on Android'
      date='Oct 2018 - Dec 2018'
      theme='../images/oii-icon.png'
      link='/projects/sms'>
    </Stub>
    <Stub
      title='ModuleCG'
      desc='Action-Programming Card Game'
      date='Dec 2015'
      theme='../images/oii-icon.png'
      link='/projects/modulecg'>
    </Stub>
  </div>
)

Projects.propTypes = {}

export default Projects