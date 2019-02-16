import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const ModuleCGPage = () => (
  <Layout title='ModuleCG'>
    <div className='page_title'>ModuleCG</div>
    <div className='page_subtitle'>An Action-Programming Card Game</div>

    <div className='note'><p>Written in February 2017</p></div>

    <div className='paragraph'><p>During the winter of 2015, I participated in a tabletop game jam known as Paper Jam 4. The challenge was to create a print-and-play game over a 10 day period. Participants were given a choice of theme sets, each with a mechanic, theme, goal, and restriction. I chose the following set:</p></div>
    <div className=''><ul>
      <li>Mechanics: Action Programming</li>
      <li>Theme: Laser, Zoo</li>
      <li>Victory: Biggest Reputation</li>
      <li>Constraint: Must be easy for the brain</li>
    </ul></div>
    <div className='paragraph_unindent'><p>The design process began with a look at the mechanic. Action programming is gameplay that requires a player or players to decide on multiple actions. Those actions are then execute in sequence with further input only required after all actions have completed. This creates a lack of adaptability, which makes action programming a mechanic of prediction and planning.</p></div>
    <div className='paragraph'><p>This mechanic was evocative of the gameplay and theming of Transistor, a video game with a beautiful, computer themed aesthetic, and a fluid, action-based combat system. A part of this system made use of items that had multiple purposes when equipped in different ways. This gave players a wide range of choice while providing only a few resources. This acted as inspiration for modular nature of Module.</p></div>
    <div className='paragraph'><p>I decided to make Module a card game, as drawing is a mechanic that predictable provides resources to each player. From here cards were designed around the idea of having base units that were modified in different ways by equipping supporting cards. The theming incorporated a zoo theme in unit design, by having different program units named after a variety of different animals (ex: Fennec.exe). The victory condition was incorporated by each player having a reputation, and the program units work to either build a player's reputation, or tear down the reputation of their opposition.</p></div>
    <div className='paragraph'><p>To fit the print-and-play requirements, assets were designed by Peter Van and Anh Le. Peter created card borders and card backs, while Anh did card art for many of the cards. The final product is the current print-and-play version of ModuleCG.</p></div>

    <hr></hr>
    <div className='title'>Reflection</div>
    <hr></hr>

    <div className='paragraph'><p>Reflecting on the project two years later, I understand two main problems with ModuleCG’s design. The first is the level of complexity. The ruleset consists primarily of terms and phases, and is confusing to unfamiliar eyes. In ways, it reminiscent of many collectible card games in how it focuses on board control and maintaining units. These problems of complexity could be avoided in a couple of ways. The most obvious is further iterating on the design. “Trimming the fat” of the ruleset could do wonders on creating a much more playable game. The original version of ModuleCG was jam project, and for that reason had limited time for iterative design and playtesting. Another solution would be to stray farther from tradition collectible card games. Shifting moduleCG to focus more on a per round result and less on board state could make each round more engaging and reduce the need for complex unit interaction. It would also help avoid some pitfalls common to CCGs (ex: snowballing).</p></div>
    <div className='paragraph'><p>The second problem is the print-and-play nature of the game. Though this was a requirement for the contest, I feel that Module would play better as a video game, strictly because of its action programming mechanics. These mechanics translate better in a virtual/digital environment, as a player only has to worry about making the decisions, and not on executing the actions. This would reduce the overall computation a player has to go through while playing, without taking away from the satisfying aspects of gameplay, the planning and decision making.</p></div>
    <div className='paragraph'><p>Overall, I’m still interested in the potential of this project, and will likely revisit it in the future.</p></div>

    <hr></hr>
    <div className='title'>Links</div>
    <hr></hr>

    <div className='content_block'>
    <ul>
      <li><ALink href='http://modulecg.com/#!/'>ModuleCG</ALink></li>
      <li><ALink href='https://www.reddit.com/r/tabletopgamedesign/comments/3fb40a/paper_jam_4_themes_are_up_make_a_printable_paper/'>PaperJam 4 Reddit Thread</ALink></li>
    </ul>
    </div>
  </Layout>
)

export default ModuleCGPage
