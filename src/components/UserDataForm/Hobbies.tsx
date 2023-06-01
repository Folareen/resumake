import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

type SkillType = {
    hobby: string,
    id: number
}


const Hobbies = () => {
    const [hobbies, setSkills] = useState<SkillType[]>([{
        hobby: ' ',
        id: 0
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (hobbies.length === 0) return
        dispatch(setUserData({
            key: 'hobbies',
            value: hobbies.filter(hobby => hobby.hobby !== '').map((hobby) => hobby.hobby.trim())
        }))
    }


    useEffect(() => {
        inputContainerRef.current.scrollTop += 100
    }, [hobbies])



    return (
        <div>
            <form>
                <h2>
                    Hobbies
                </h2>

                <div className='multiple-input-container' ref={inputContainerRef}>
                    {hobbies.map((hobby, index) => {
                        return (
                            <div className='input-item' key={hobby.id} >
                                <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    let allSkills = hobbies
                                    let currSkill = hobbies[index]
                                    currSkill.hobby = e.target.value
                                    allSkills[index] = currSkill
                                    setSkills(allSkills)
                                }} placeholder='hobby' className='input-item' />
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault()
                                    setSkills(hobbies.filter(sk => sk.id != hobby.id))
                                }} className='del-item-btn'>
                                    <IoClose />
                                </button>
                            </div>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setSkills([...hobbies, {
                            hobby: ' ',
                            id: hobbies[hobbies.length - 1]['id'] + 1 || 0
                        }])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={hobbies.length === 0} className="save">
                    Save
                </button>
            </form>
        </div>
    )
}

export default Hobbies