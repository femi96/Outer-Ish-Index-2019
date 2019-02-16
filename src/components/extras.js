import React from 'react'

import Circle from '../components/circle'

const Extras = () => (
  <div className='circ_container'>
    <Circle
      image='S'
      theme='circ_theme_a'
      text='Skills'
      link='/extras/skills'>
    </Circle>
    <Circle
      image='C'
      theme=''
      text='Courses'
      link='/extras/courses'>
    </Circle>
    <Circle
      image='T'
      theme=''
      text='Thoughts'
      link='/extras/thoughts'>
    </Circle>
    <Circle
      image='M'
      theme=''
      text='Music'
      link='/extras/music'>
    </Circle>
    <Circle
      image='G'
      theme=''
      text='Games'
      link='/extras/games'>
    </Circle>
  </div>
)

Extras.propTypes = {}

export default Extras