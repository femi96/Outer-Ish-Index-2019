import React from 'react'

import Layout from '../../components/layout'
import ALink from '../../components/alink'

const SkillsPage = () => (
  <Layout title='Skills'>
    <div className='page_title'>Skills</div>
    <div className='page_subtitle'>Familiar Tools</div>

    <div className='listblock_container'>

    <div className='listblock listblock3'>
    <div className='listblock_title'>Software</div>
    <ul>
      <li><ALink href='https://unity3d.com/' title='Unity3D'>Unity3D</ALink></li>
      <li><ALink href='http://www.mathworks.com/products/matlab' title='Matlab'>Matlab</ALink></li>
      <li><ALink href='https://www.latex-project.org/' title='LaTeX'>LaTeX</ALink></li>
      <li><ALink href='https://products.office.com/en-US/' title='Microsoft Office'>Microsoft Office</ALink></li>
      <li><ALink href='https://drive.google.com/' title='Google Drive Services'>Google Drive Services</ALink></li>
      <li><ALink href='https://www.blender.org/' title='Blender'>Blender</ALink></li>
      <li><ALink href='http://www.solidworks.com/' title='Solidworks'>Solidworks</ALink></li>
      <li><ALink href='https://developer.android.com/studio/' title='Android Studio'>Android Studio</ALink></li>
      <li><ALink href='https://developer.apple.com/xcode/' title='Xcode'>Xcode</ALink></li>
    </ul>
    </div>

    <div className='listblock listblock3'>
    <div className='listblock_title'>Languages</div>
    <ul>
      <li><ALink href='https://en.wikipedia.org/wiki/American_English' title='English'>English</ALink></li>
      <li><ALink href='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' title='C#'>C#</ALink></li>
      <li><ALink href='https://en.wikipedia.org/wiki/Cg_%28programming_language%29' title='Cg'>Cg</ALink></li>
      <li><ALink href='https://en.wikipedia.org/wiki/C%2B%2B' title='C++'>C++</ALink></li>
      <li><ALink href='https://en.wikipedia.org/wiki/Java_(programming_language)' title='Java'>Java</ALink></li>
      <li><ALink href='https://en.wikipedia.org/wiki/Objective-C' title='Objective-C'>Objective-C</ALink></li>
      <li><ALink href='https://www.python.org/' title='Python 2.7/3+'>Python 2.7/3+</ALink></li>
      <li><ALink href='https://www.javascript.com/' title='Javascript/ES6'>Javascript/ES6</ALink></li>
      <li><ALink href='https://en.wikipedia.org/wiki/HTML' title='HTML'>HTML</ALink></li>
      <li><ALink href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets' title='CSS'>CSS</ALink></li>
    </ul>
    </div>

    <div className='listblock listblock3'>
    <div className='listblock_title'>Frameworks+</div>
    <ul>
      <li><ALink href='https://www.oculus.com/' title='OculusVR'>OculusVR</ALink></li>
      <li><ALink href='https://nodejs.org/' title='Node'>Node</ALink></li>
      <li><ALink href='https://www.npmjs.com/' title='NPM'>NPM</ALink></li>
      <li><ALink href='https://facebook.github.io/react/' title='React'>React</ALink></li>
      <li><ALink href='https://redux.js.org/' title='Redux'>Redux</ALink></li>
      <li><ALink href='https://facebook.github.io/immutable-js/' title='Immutable'>Immutable</ALink></li>
      <li><ALink href='https://angularjs.org/' title='AngularJS'>AngularJS</ALink></li>
      <li><ALink href='https://www.gatsbyjs.org/' title='GatsbyJS'>GatsbyJS</ALink></li>
      <li><ALink href='https://www.meteor.com/' title='Meteor'>Meteor</ALink></li>
      <li><ALink href='https://galaxy.meteor.com' title='Galaxy'>Galaxy</ALink></li>
      <li><ALink href='https://pouchdb.com/' title='PouchDB'>PouchDB</ALink></li>
      <li><ALink href='https://d3js.org/' title='D3'>D3</ALink></li>
    </ul>
    </div>

    </div>
  </Layout>
)

export default SkillsPage
