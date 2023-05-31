import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import Required from '../Required'

const Profile = () => {
    const [name, setName] = useState<string>('')
    const [profession, setProfession] = useState<string>('')

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!name || !profession) return
        dispatch(setUserData({
            key: 'profile',
            value: {
                name,
                profession
            }
        }))
    }

    return (
        <div>
            <form>
                <h2>
                    Profile <Required />
                </h2>
                <div className='input-container'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setName(e.target.value)
                    }} placeholder='john doe' className='input' />
                </div>


                <div className='input-container'>
                    <label htmlFor='profession'>Profession</label>
                    <input type='text' value={profession} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setProfession(e.target.value)
                    }} placeholder='software developer' className='input' />
                </div>

                <button onClick={onSave} disabled={!name || !profession} className='save'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Profile