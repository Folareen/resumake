import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../../firebase.config'
import formatFirebaseError from '../../utils/formatFirebaseError'

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('')
    const [submitting, setSubmitting] = useState<boolean>(false)


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try {
            setSubmitting(true)
            await sendPasswordResetEmail(auth, email)
            toast.success('Password reset link sent to your email!')
        } catch (error: any) {
            toast.error(formatFirebaseError(error.message))
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <div>ForgotPassword

            <form className=''>
                <div>
                    <label className='text-[#063A4F] my-2 text-md md:text-lg font-bold'>
                        Email</label>
                    <input type='email' className='' placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className=''>
                    <p className=''>
                        Remember password?
                    </p>
                    <p>
                        <Link to='/login' className=''>Login</Link>
                    </p>
                </div>
                <div className=''>
                    <p>
                        Don't have an account?
                    </p>
                    <p>
                        <Link to='/signup' className=''>Signup</Link>
                    </p>
                </div>

                <button className={''} onClick={handleSubmit} type="submit">
                    {
                        submitting ?
                            <>
                                Please wait...
                            </>
                            :
                            'Reset Password'
                    }
                </button>

            </form>
        </div>
    )
}

export default ForgotPassword