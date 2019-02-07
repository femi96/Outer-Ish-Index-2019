import React from 'react'

import Circle from '../components/circle'

const Extras = () => (
  <div className='circ_container'>
    <Circle
      image='../images/oii-icon.png'
      char='S'
      alt='Skills'
      link='/skills'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      char='C'
      alt='Courses'
      link='/courses'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      char='T'
      alt='Thoughts'
      link='/thoughts'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      char='M'
      alt='Music'
      link='/music'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      char='G'
      alt='Games'
      link='/games'>
    </Circle>
  </div>
)

Extras.propTypes = {}

export default Extras