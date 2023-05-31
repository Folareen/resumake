import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import Required from '../Required'

const Contact = () => {
    const [address, setAddress] = useState<string>('')
    const [phone, setPhone] = useState<number>(0)
    const [email, setEmail] = useState<string>('')
    const [website, setWebsite] = useState<string>('')

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!address || !phone || !email || !website) return
        dispatch(setUserData({
            key: 'contact',
            value: {
                address,
                phone,
                email,
                website
            }
        }))
    }

    return (
        <div>
            <form>
                <h2>
                    Contact <Required />
                </h2>
                <div className='input-container'>
                    <label htmlFor="">Address</label>
                    <input type='text' value={address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAddress(e.target.value)
                    }} placeholder='lorem street, lagos.' className='input' />
                </div>
                <div className='input-container'>
                    <label htmlFor="">Phone number</label>
                    <input type='number' value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPhone(Number(e.target.value))
                    }} placeholder='+2348012345678' className='input' />
                </div>
                <div className='input-container'>
                    <label htmlFor="">Email address</label>
                    <input type='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value)
                    }} placeholder='email@mail.com' className='input' />
                </div>
                <div className='input-container'>
                    <label htmlFor="">Website
                    </label>
                    <input type='text' value={website} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setWebsite(e.target.value)
                    }} placeholder='website' className='input' />
                </div>

                <button onClick={onSave} disabled={!address || !phone || !email || !website} className='save
                '>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Contact