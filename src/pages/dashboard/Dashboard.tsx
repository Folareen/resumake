import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../../firebase.config'

const Dashboard = () => {


    return (
        <div>Dashboard
            <button onClick={() => {
                signOut(auth)
            }}>
                logout
            </button>
        </div>
    )
}

export default Dashboard