import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__content">
                <h1>resumake</h1>
                <p>
                    Build an outstanding resume in minutes with our easy-to-use resume builder.
                </p>
                <Link to='/create'>
                    Build your resume now
                </Link>
            </div>

        </div>
    )
}

export default Landing