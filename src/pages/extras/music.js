import React from 'react'

import Layout from '../../components/layout'
import Box from '../../components/box'

const MusicPage = () => (
  <Layout title='Music'>
    <div className='page_title'>Music</div>
    <div className='page_subtitle'>Some of my favorite music</div>
    
    <hr></hr>
    <div className='title'>Top 5 Albums</div>
    <hr></hr>

    <div className='box_container'>
      <Box
        theme=''
        author='Frank Ocean'
        text='Blonde'
        link='https://www.youtube.com/watch?v=diIFhc_Kzng&list=PLJ2FljtfRtQVqVt0AwpyYGxJrET4cjB4V'>
      </Box>
      <Box
        theme=''
        author='Kevin Abstract'
        text='MTV1987'
        link='https://www.youtube.com/watch?v=7D3AnGPeADk'>
      </Box>
      <Box
        theme=''
        author='Tyler the Creator'
        text='Flower Boy'
        link='https://www.youtube.com/watch?v=OB12BslMI3Q'>
      </Box>
      <Box
        theme=''
        author='Mitski'
        text='Be the Cowboy'
        link='https://www.youtube.com/watch?v=3zdFZJf-B90&list=PLVCjGDT0cZZF78SAWjwV4_Lsu01RyWr5q'>
      </Box>
      <Box
        theme=''
        author='Kevin Abstract'
        text='American Boyfriend'
        link='https://www.youtube.com/watch?v=dJarpbuXxDU'>
      </Box>
    </div>
  </Layout>
)

export default MusicPage
