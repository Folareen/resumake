import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>

      <div className="not-found__content">
        <h2>
          4<span>0</span>4
        </h2>
        <p>
          Page not found
        </p>
        <Link to='/' className=''>
          Go  home
        </Link>
      </div>

    </div>
  )
}

export default NotFound