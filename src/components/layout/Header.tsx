import { signOut } from 'firebase/auth'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { auth } from '../../../firebase.config'
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
                        <>
                            {
                                pathname === '/dashboard' ?
                                    <div className='dashboard-btns'>
                                        <Link to='/create'>
                                            Create Resume
                                        </Link>
                                        <button onClick={() => {
                                            signOut(auth)
                                        }} className='logout-btn'>
                                            Logout
                                        </button>
                                    </div>
                                    :
                                    <Link to='/dashboard'>
                                        Dashboard
                                    </Link>
                            }
                        </>
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