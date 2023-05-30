import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase.config'

const GoogleSignInBtn = () => {
    return (
        <button onClick={async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            signInWithPopup(auth, new GoogleAuthProvider())
        }} className='google-signin-btn'>Sign in with Google
        </button>
    )
}

export default GoogleSignInBtn