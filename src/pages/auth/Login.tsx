import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../../firebase.config'
import formatFirebaseError from '../../utils/formatFirebaseError'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault()
            setSubmitting(true)
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            console.log(error)
            toast.error(formatFirebaseError(error.message))
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div>Login
            <form>
                <input type='email' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder='email' />
                <input type='password' placeholder='password' value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <button onClick={handleLogin}>
                    {
                        submitting ?
                            'submitting'
                            :
                            'Login'
                    }
                </button>
            </form>
        </div>
    )
}

export default Login