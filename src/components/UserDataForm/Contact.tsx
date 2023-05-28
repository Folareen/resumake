import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const Contact = () => {
    const [address, setAddress] = useState<string>('')
    const [phone, setPhone] = useState<number>(0)
    const [email, setEmail] = useState<string>('')
    const [website, setWebsite] = useState<string>('')

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
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
        <div>Contact
            <form>
                <input type='text' value={address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setAddress(e.target.value)
                }} placeholder='address' />
                <input type='number' value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPhone(Number(e.target.value))
                }} placeholder='phone' />
                <input type='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                }} placeholder='email' />
                <input type='text' value={website} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setWebsite(e.target.value)
                }} placeholder='website' />
                <button onClick={onSave}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Contact