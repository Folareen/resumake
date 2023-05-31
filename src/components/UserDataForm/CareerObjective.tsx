import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const CareerObjective = () => {
    const [careerObjective, setCareerObjective] = useState<string>('')

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!careerObjective) return
        dispatch(setUserData({
            key: 'careerObjective',
            value: careerObjective
        }))
    }

    return (
        <div>
            Career Objective
            <form>
                <textarea value={careerObjective} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setCareerObjective(e.target.value)
                }} placeholder='Career Objective' > </textarea>
                <button onClick={onSave} disabled={!careerObjective}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default CareerObjective