import React from 'react'

import Layout from '../../components/layout'
import CourseLink from '../../components/courselink'

const CoursesPage = () => (
  <Layout title='Courses'>
    <div className='page_title'>Courses</div>
    <div className='page_subtitle'>Classes taken at MIT</div>

    <div className='listblock_container'>

    <div className='listblock'>
    <div className='listblock_title'>1st Year</div>
    <ul>
      <li><CourseLink text='Introduction to Solid-State Chemistry' number='3.091'/></li>
      <li><CourseLink text='Introduction to Computer Science Programming in Python' number='6.0001'/></li>
      <li><CourseLink text='Introduction to EECS I' number='6.01'/></li>
      <li><CourseLink text='Introduction to MATLAB' number='6.057'/></li>
      <li><CourseLink text='Introductory Biology' number='7.013'/></li>
      <li><CourseLink text='Physics I (Mechanics)' number='8.01'/></li>
      <li><CourseLink text='Physics II (EM)' number='8.02'/></li>
      <li><CourseLink text='Calculus I' number='18.01'/></li>
      <li><CourseLink text='Calculus II' number='18.02'/></li>
      <li><CourseLink text='Differential Equations' number='18.03'/></li>
      <li><CourseLink text='Rhetoric' number='21W.747'/></li>
    </ul>
    </div>

    <div className='listblock'>
    <div className='listblock_title'>2nd Year</div>
    <ul>
      <li><CourseLink text='Mechanics and Materials I' number='2.001'/></li>
      <li><CourseLink text='Mechanics and Materials II' number='2.002'/></li>
      <li><CourseLink text='Dynamics and Control I' number='2.003'/></li>
      <li><CourseLink text='Dynamics and Control II' number='2.004'/></li>
      <li><CourseLink text='Thermal-Fluids Engineering I' number='2.005'/></li>
      <li><CourseLink text='Numerical Computation for Mechanical Engineers' number='2.086'/></li>
      <li><CourseLink text='The Film Experience' number='21L.011'/></li>
      <li><CourseLink text='Introduction to Game Design Methods' number='CMS.301'/></li>
    </ul>
    </div>

    <div className='listblock'>
    <div className='listblock_title'>3rd Year</div>
    <ul>
      <li><CourseLink text='Mechanical Engineering Tools' number='2.670'/></li>
      <li><CourseLink text='Measurement and Instrumentation' number='2.671'/></li>
      <li><CourseLink text='Electronics for Mechanical Systems' number='2.678'/></li>
      <li><CourseLink text='Introduction to Computational Thinking and Data Science' number='6.0002'/></li>
      <li><CourseLink text='Introduction to Machine Learning' number='6.036'/></li>
      <li><CourseLink text='Mathematics for Computer Science' number='6.042'/></li>
      <li><CourseLink text='Media Systems and Texts' number='CMS.400'/></li>
      <li><CourseLink text='Current Debates in Media' number='CMS.701'/></li>
    </ul>
    </div>

    <div className='listblock'>
    <div className='listblock_title'>4th Year</div>
    <ul>
      <li><CourseLink text='Computation Structures' number='6.004'/></li>
      <li><CourseLink text='Introduction to Algorithms' number='6.006'/></li>
      <li><CourseLink text='Fundamentals of Programming' number='6.009'/></li>
      <li><CourseLink text='Elements of Software Construction' number='6.031'/></li>
      <li><CourseLink text='Design and Analysis of Algorithms' number='6.046'/></li>
      <li><CourseLink text='Game Design' number='CMS.608'/></li>
      <li><CourseLink text='Creating Video Games' number='CMS.611'/></li>
    </ul>
    </div>

    <div className='listblock'>
    <div className='listblock_title'>5th Year</div>
    <ul>
      <li><CourseLink text='Computer Systems Engineering' number='6.033'/></li>
      <li><CourseLink text='Principles and Practice of Assistive Technology' number='6.811'/></li>
      <li><CourseLink text='Digital and Computational Photography' number='6.815'/></li>
      <li><CourseLink text='Computer Graphics' number='6.837'/></li>
      <li><CourseLink text='Oral Communication' number='6.UAT'/></li>
      <li><CourseLink text='Games for Social Change' number='CMS.615'/></li>
      <li><CourseLink text='Games and Culture' number='CMS.616'/></li>
    </ul>
    </div>

    </div>
  </Layout>
)

export default CoursesPage
