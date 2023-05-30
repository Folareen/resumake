import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../../components/Testimonials'
import { GoPrimitiveDot } from 'react-icons/go'

const Landing = () => {
    return (
        <div className="landing">
            <header className="landing__header">
                <h1>resumake.</h1>
                <Link to='/login'>
                    Login
                </Link>
            </header>
            <div className="landing__content">
                <h2>
                    Build an outstanding <span>resume</span> in few minutes.
                </h2>
                <p>
                    Create, edit, manage, save and download your resume as PDF/Image without stress.
                </p>
                <Link to='/create' className='cta'>
                    Build your resume now
                </Link>


            </div>
            <Testimonials />

            <div className='footer'>
                <p >
                    Built by <a target={'_blank'} href="https://www.twitter.com/_Folareen_">Folareen</a>
                </p>
                <GoPrimitiveDot className='dot' />
                <a className='star' target={'_blank'} href="https://www.github.com/Folareen/resumake">Star on github</a>
            </div>



        </div>
    )
}

export default Landing