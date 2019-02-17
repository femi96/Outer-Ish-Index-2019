import React from 'react'

import Circle from '../components/circle'

const Extras = () => (
  <div className='circ_container'>
    <Circle
      image='S'
      theme='circ_theme_a'
      text='Skills'
      link='/skills'>
    </Circle>
    <Circle
      image='C'
      theme=''
      text='Courses'
      link='/courses'>
    </Circle>
    <Circle
      image='T'
      theme=''
      text='Thoughts'
      link='/thoughts'>
    </Circle>
    <Circle
      image='M'
      theme=''
      text='Music'
      link='/music'>
    </Circle>
    <Circle
      image='G'
      theme=''
      text='Games'
      link='/games'>
    </Circle>
  </div>
)

Extras.propTypes = {}

export default Extras