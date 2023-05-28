import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const Profile = () => {
    const [name, setName] = useState<string>('')
    const [profession, setProfession] = useState<string>('')

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setUserData({
            key: 'profile',
            value: {
                name,
                profession
            }
        }))
    }

    return (
        <div>Profile
            <form>
                <input type='text' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value)
                }} />
                <input type='text' value={profession} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProfession(e.target.value)
                }} />
                <button onClick={onSave}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Profile