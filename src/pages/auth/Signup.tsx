import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../../firebase.config'
import GoogleSignInBtn from '../../components/GoogleSignInBtn'
import formatFirebaseError from '../../utils/formatFirebaseError'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.parentElement.classList.add('focus')
    }
    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.parentElement.classList.remove('focus')
    }

    return (
        <div className='auth-page'>
            <form className='auth-page__form'>

                <h1>
                    Signup
                </h1>

                <div className='input-box focus'>
                    <MdEmail />
                    <input type='email' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} placeholder='Email Address' className='input' onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className='input-box focus'>
                    <RiLockPasswordFill />
                    <input type='password' placeholder='Password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} className='input' onFocus={onFocus} onBlur={onBlur} />
                </div>


                <button onClick={handleSubmit} className='submit-btn'>
                    {
                        submitting ?
                            'submitting'
                            :
                            'Signup'
                    }
                </button>
                <div className='have'>
                    <p>
                        Have an account?
                    </p>
                    <Link to='/login' className=''>Login</Link>
                </div>

                <div className='divider'>
                </div>

                <GoogleSignInBtn />

            </form>
        </div>
    )
}

export default Signup