import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

type HobbyType = {
    hobby: string,
    id: number
}


const Hobbies = () => {
    const [hobbies, setHobbies] = useState<HobbyType[]>([{
        hobby: ' ',
        id: 0
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                                    let allHobbies = hobbies
                                    let currHobby = hobbies[index]
                                    currHobby.hobby = e.target.value
                                    allHobbies[index] = currHobby
                                    setHobbies(allHobbies)
                                }} placeholder='hobby' className='input-item' />
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault()
                                    setHobbies(hobbies.filter(hob => hob.id != hobby.id))
                                }} className='del-item-btn'>
                                    <IoClose />
                                </button>
                            </div>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setHobbies([...hobbies, {
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
                <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    e.preventDefault()
                    navigate('/templates')
                }} className="save" style={{ marginTop: '0.5em' }}>
                    Generate Resume
                </button>
            </form>
        </div>
    )
}

export default Hobbies