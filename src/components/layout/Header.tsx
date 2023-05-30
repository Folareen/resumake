import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { RootState } from '../../redux/store'

const Header = () => {
    const pathname = useLocation().pathname
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <header className={`header ${pathname == '/' ? 'transparent' : ''}`}>
            <div className='header__content'>
                <h1>resumake.</h1>
                {
                    user ?
                        <Link to='/dashboard'>
                            Dashboard
                        </Link>
                        :
                        pathname === '/login' ?
                            <Link to='/signup'>
                                Signup
                            </Link>
                            :
                            <Link to='/login'>
                                Login
                            </Link>
                }
            </div>
        </header>
    )
}

export default Header