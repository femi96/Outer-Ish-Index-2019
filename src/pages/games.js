import React from 'react'

import Layout from '../components/layout'
import Box from '../components/box'

const GamesPage = () => (
  <Layout title='Games'>
    <div className='page_title'>Games</div>
    <div className='page_subtitle'>Some of my favorite games</div>
    
    <hr></hr>
    <div className='title'>Top 5 Games</div>
    <hr></hr>

    <div className='box_container'>
      <Box
        theme='box_theme_hollow'
        author='Team Cherry'
        text='Hollow Knight'
        link='https://hollowknight.com/'>
      </Box>
      <Box
        theme='box_theme_vp'
        author='Rare'
        text='Viva Piñata: TiP'
        link='https://en.wikipedia.org/wiki/Viva_Pi%C3%B1ata:_Trouble_in_Paradise'>
      </Box>
      <Box
        theme='box_theme_itb'
        author='Subset Games'
        text='Into the Breach'
        link='https://subsetgames.com/itb.html'>
      </Box>
      <Box
        theme='box_theme_transistor'
        author='Supergiant Games'
        text='Transistor'
        link='https://www.supergiantgames.com/games/transistor/'>
      </Box>
      <Box
        theme='box_theme_dark'
        author='FromSoftware'
        text='Dark Souls'
        link='https://en.wikipedia.org/wiki/Dark_Souls'>
      </Box>
    </div>
  </Layout>
)

export default GamesPage
