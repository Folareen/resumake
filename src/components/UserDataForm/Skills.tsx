import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const Skills = () => {
    const [skills, setSkills] = useState<string[]>([])
    const skillRef = React.useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setUserData({
            key: 'skills',
            value: skills
        }))
    }

    return (
        <div>Skills
            <form>
                <p>
                    {skills.map((skill, index) => {
                        return (
                            <span key={index}>{skill} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <input type='text' ref={skillRef} placeholder='skill' />
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (skillRef.current) {
                            setSkills([...skills, skillRef.current.value])
                            skillRef.current.value = ''
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Skills