import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const CareerObjective = () => {
    const [careerObjective, setCareerObjective] = useState<string>('')

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setUserData({
            key: 'careerObjective',
            value: careerObjective
        }))
    }

    return (
        <div>
            Career Objective
            <form>
                <input type='text' value={careerObjective} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCareerObjective(e.target.value)
                }} placeholder='Career Objective' />
                <button onClick={onSave}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default CareerObjective