import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import Required from '../Required'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

type SkillType = {
    skill: string,
    id: number
}


const Skills = () => {
    const [skills, setSkills] = useState<SkillType[]>([{
        skill: ' ',
        id: 0
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (skills.length === 0) return
        dispatch(setUserData({
            key: 'skills',
            value: skills.filter(skill => skill.skill !== '').map((skill) => skill.skill.trim())
        }))
    }


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
                            <div className='input-item' key={skill.id} >
                                <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    let allSkills = skills
                                    let currSkill = skills[index]
                                    currSkill.skill = e.target.value
                                    allSkills[index] = currSkill
                                    setSkills(allSkills)
                                }} placeholder='skill' className='input-item' />
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault()
                                    setSkills(skills.filter(sk => sk.id != skill.id))
                                }} className='del-item-btn'>
                                    <IoClose />
                                </button>
                            </div>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setSkills([...skills, {
                            skill: ' ',
                            id: skills[skills.length - 1]['id'] + 1 || 0
                        }])
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