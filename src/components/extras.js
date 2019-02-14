import React from 'react'

import Circle from '../components/circle'

const Extras = () => (
  <div className='circ_container'>
    <Circle
      image='../images/oii-icon.png'
      theme='circ_theme_a'
      char='S'
      alt='Skills'
      link='/skills'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      theme=''
      char='C'
      alt='Courses'
      link='/courses'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      theme=''
      char='T'
      alt='Thoughts'
      link='/thoughts'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      theme=''
      char='M'
      alt='Music'
      link='/music'>
    </Circle>
    <Circle
      image='../images/oii-icon.png'
      theme=''
      char='G'
      alt='Games'
      link='/games'>
    </Circle>
  </div>
)

Extras.propTypes = {}

export default Extras