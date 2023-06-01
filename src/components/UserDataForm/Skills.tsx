import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import Required from '../Required'
import { IoIosAdd } from 'react-icons/io'


const Skills = () => {
    const [skills, setSkills] = useState<string[]>([' '])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (skills.length === 0) return
        dispatch(setUserData({
            key: 'skills',
            value: skills.filter(skill => skill !== '')
        }))
    }

    useEffect(() => {
        if (skills.includes('')) {
            setSkills(skills.filter(skill => skill !== ''))
        }
    }, [skills])

    useEffect(() => {
        inputContainerRef.current.scrollTop += 100
    }, [skills])



    return (
        <div>
            <form>
                <h2>
                    Skills <Required />
                </h2>

                <div className='multiple-input-container' ref={inputContainerRef}>
                    {skills.map((skill, index) => {
                        return (
                            <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                let allSkills = skills
                                let currSkill = skills[index]
                                currSkill = e.target.value
                                allSkills[index] = currSkill
                                setSkills(allSkills)
                            }} placeholder='skill' className='input-item' />
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setSkills([...skills, ' '])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={skills.length === 0} className="save">
                    Save
                </button>
            </form>
        </div>
    )
}

export default Skills