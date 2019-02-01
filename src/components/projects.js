import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Stub from '../components/stub'

const Projects = ({}) => (
  <div className='stub_container'>
    <Stub
      title='PocketGems'
      desc='PocketGems etc desc'
      date='Jan 2019'
      image='../images/oii-icon.png'>
    </Stub>
    <Stub
      title='PocketGems'
      desc='PocketGems etc desc'
      date='Jan 2019'
      image='lul'>
    </Stub>
    <Stub
      title='PocketGems'
      desc='PocketGems etc desc'
      date='Jan 2019'
      image='lul'>
    </Stub>
    <Stub
      title='PocketGems'
      desc='PocketGems etc desc'
      date='Jan 2019'
      image='lul'>
    </Stub>
    <Stub
      title='PocketGems'
      desc='PocketGems etc desc'
      date='Jan 2019'
      image='lul'>
    </Stub>
  </div>
)

Projects.propTypes = {}

export default Projects