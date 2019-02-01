import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import Circle from '../components/circle'

const Extras = ({}) => (
  <div className='circ_container'>
    <Circle
      image='../images/oii-icon.png'
      alt='skills'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      alt='courses'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      alt='thoughts'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      alt='music'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      alt='games'>
    </Circle>
  </div>
)

Extras.propTypes = {}

export default Extras