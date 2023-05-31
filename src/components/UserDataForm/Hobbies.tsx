import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import { IoIosAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'


const Hobbies = () => {
    const [hobbies, setInterests] = useState<string[]>([' '])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (hobbies.length === 0) return
        dispatch(setUserData({
            key: 'hobbies',
            value: hobbies.filter(hobby => hobby !== '')
        }))
    }

    useEffect(() => {
        if (hobbies.includes('')) {
            setInterests(hobbies.filter(hobby => hobby !== ''))
        }
    }, [hobbies])

    useEffect(() => {
        inputContainerRef.current.scrollLeft += 180

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
                            <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                let allInterests = hobbies
                                let currInterest = hobbies[index]
                                currInterest = e.target.value
                                allInterests[index] = currInterest
                                setInterests(allInterests)
                            }} placeholder='hobby' className='input-item' />
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setInterests([...hobbies, ' '])
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
                }} disabled={hobbies.length === 0} className="save" style={{ marginTop: '0.5em' }}>
                    Generate Resume
                </button>
            </form>
        </div>
    )
}

export default Hobbies