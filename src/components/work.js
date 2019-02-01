import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Stub from '../components/stub'

const Work = ({}) => (
  <div className='stub_container'>
    <Stub
      title='PocketGems'
      desc='Pioneering Mobile Games'
      date='Jan 2019'
      image='../images/oii-icon.png'>
    </Stub>
    <Stub
      title='Clevr'
      desc='Collaborative Learning Experiences in VR'
      date='Jan 2018 - Now'
      image='lul'>
    </Stub>
    <Stub
      title='Gameblox'
      desc='Playful, Powerful Learning'
      date='Jun-Aug 2017'
      image='lul'>
    </Stub>
    <Stub
      title='PubPub'
      desc='Open, Continuous Publishing'
      date='Jun-Aug 2015 & 2016'
      image='lul'>
    </Stub>
    <Stub
      title='DataTapestry'
      desc='Earth Tapestry Data Exploration'
      date='Jun 2015'
      image='lul'>
    </Stub>
  </div>
)

Work.propTypes = {}

export default Work