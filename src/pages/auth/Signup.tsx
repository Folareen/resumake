import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../../firebase.config'
import formatFirebaseError from '../../utils/formatFirebaseError'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const handleSignup = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault()
            setSubmitting(true)
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            console.log(error)
            toast.error(formatFirebaseError(error.message))
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div>Signup
            <form>
                <input type='email' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder='email' />
                <input type='password' placeholder='password' value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <button onClick={handleSignup}>
                    {
                        submitting ?
                            'submitting'
                            :
                            'Signup'
                    }
                </button>
                <div>
                    <p>
                        Already have an account?
                    </p>
                    <Link to='/login' className=''>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup