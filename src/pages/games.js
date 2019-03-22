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
        theme='hollow'
        author='Team Cherry'
        text='Hollow Knight'
        link='https://hollowknight.com/'>
      </Box>
      <Box
        theme='vp'
        author='Rare'
        text='Viva Piñata: TiP'
        link='https://en.wikipedia.org/wiki/Viva_Pi%C3%B1ata:_Trouble_in_Paradise'>
      </Box>
      <Box
        theme='itb'
        author='Subset Games'
        text='Into the Breach'
        link='https://subsetgames.com/itb.html'>
      </Box>

      <Box
        theme='transistor'
        author='Supergiant Games'
        text='Transistor'
        link='https://www.supergiantgames.com/games/transistor/'>
      </Box>
      <Box
        theme='dark'
        author='FromSoftware'
        text='Dark Souls'
        link='https://en.wikipedia.org/wiki/Dark_Souls'>
      </Box>
    </div>
    
    <hr></hr>
    <div className='title'>Honorable Mentions</div>
    <hr></hr>

    <div className='box_container'>
      <Box
        theme='starbound'
        author='Chucklefish'
        text='Starbound'
        link='https://playstarbound.com/'>
      </Box>
      <Box
        theme='slime'
        author='Monomi Park'
        text='Slime Rancher'
        link='http://slimerancher.com/'>
      </Box>
      <Box
        theme='ror'
        author='Hopoo Games'
        text='Risk of Rain'
        link='https://riskofraingame.com/'>
      </Box>

      <Box
        theme='pyre'
        author='Supergiant Games'
        text='Pyre'
        link='https://www.supergiantgames.com/games/pyre/'>
      </Box>
      <Box
        theme='es2'
        author='Amplitude Studios'
        text='Endless Space 2'
        link='https://www.endless-space.com/'>
      </Box>
      <Box
        theme='dq9'
        author='Level-5'
        text='Dragon Quest IX'
        link='https://en.wikipedia.org/wiki/Dragon_Quest_IX'>
      </Box>

      <Box
        theme='ffta'
        author='Square Enix'
        text='FFTA'
        link='https://en.wikipedia.org/wiki/Final_Fantasy_Tactics_Advance'>
      </Box>
      <Box
        theme='ffta2'
        author='Square Enix'
        text='FFTA2'
        link='https://en.wikipedia.org/wiki/Final_Fantasy_Tactics_A2:_Grimoire_of_the_Rift'>
      </Box>
      <Box
        theme='chocobo'
        author='h.a.n.d.'
        text='Chocobo Tales'
        link='https://en.wikipedia.org/wiki/Final_Fantasy_Fables:_Chocobo_Tales'>
      </Box>
      
      <Box
        theme='kh2'
        author='Square Enix'
        text='KH2'
        link='https://en.wikipedia.org/wiki/Kingdom_Hearts_II'>
      </Box>
      <Box
        theme='kh3'
        author='Square Enix'
        text='KH3'
        link='https://en.wikipedia.org/wiki/Kingdom_Hearts_III'>
      </Box>
      <Box
        theme='khdays'
        author='h.a.n.d.'
        text='KH 358/2'
        link='https://en.wikipedia.org/wiki/Kingdom_Hearts_358/2_Days'>
      </Box>
      
      <Box
        theme='pokemon'
        author='Game Freak'
        text='Pokemon Series'
        link='https://en.wikipedia.org/wiki/Pok%C3%A9mon_(video_game_series)#List_of_Pok%C3%A9mon_main_series_games'>
      </Box>
      <Box
        theme='sky'
        author='Chunsoft'
        text='Explorers of Sky'
        link='https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Sky'>
      </Box>
    </div>
  </Layout>
)

export default GamesPage
