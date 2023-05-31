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

            <form>
                <h2>
                    Career Objective
                </h2>

                <div className='input-container'>
                    <textarea value={careerObjective} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setCareerObjective(e.target.value)
                    }} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim purus id purus tempus, ac eleifend turpis dictum. Ut non ultrices est. Phasellus condimentum semper ante, id tempor est dapibus eu. Quisque laoreet fringilla lorem, eu bibendum magna consectetur eu.' className='input' rows={10} > </textarea>
                </div>

                <button onClick={onSave} disabled={!careerObjective} className='save'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default CareerObjective