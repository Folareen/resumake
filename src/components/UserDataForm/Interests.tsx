import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import { IoIosAdd } from 'react-icons/io'


const Interests = () => {
    const [interests, setInterests] = useState<string[]>([' '])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (interests.length === 0) return
        dispatch(setUserData({
            key: 'interests',
            value: interests.filter(interest => interest !== '')
        }))
    }

    useEffect(() => {
        if (interests.includes('')) {
            setInterests(interests.filter(interest => interest !== ''))
        }
    }, [interests])

    useEffect(() => {
        inputContainerRef.current.scrollLeft += 180

    }, [interests])



    return (
        <div>
            <form>
                <h2>
                    Interests
                </h2>

                <div className='multiple-input-container' ref={inputContainerRef}>
                    {interests.map((interest, index) => {
                        return (
                            <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                let allInterests = interests
                                let currInterest = interests[index]
                                currInterest = e.target.value
                                allInterests[index] = currInterest
                                setInterests(allInterests)
                            }} placeholder='interest' className='input-item' />
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setInterests([...interests, ' '])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={interests.length === 0} className="save">
                    Save
                </button>
            </form>
        </div>
    )
}

export default Interests