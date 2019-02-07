import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  
  <Layout title='error'>
    <div className='content_block'>
      <Link to='/'>You just hit a route that doesn&#39;t exist... click here to return to the main site.</Link>
    </div>
  </Layout>
)

export default NotFoundPage
