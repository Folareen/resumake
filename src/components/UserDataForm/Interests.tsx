import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

type InterestType = {
    interest: string,
    id: number
}

const Interests = () => {
    const [interests, setInterests] = useState<InterestType[]>([{
        interest: ' ',
        id: 0
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (interests.length === 0) return
        dispatch(setUserData({
            key: 'interests',
            value: interests.filter(interest => interest.interest !== '')
        }))
    }


    useEffect(() => {
        inputContainerRef.current.scrollTop += 100

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
                            <div className='input-item' key={interest.id} >
                                <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    let allInterests = interests
                                    let currInterest = interests[index]
                                    currInterest.interest = e.target.value
                                    allInterests[index] = currInterest
                                    setInterests(allInterests)
                                }} placeholder='interest' className='input-item' />
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                    e.preventDefault()
                                    setInterests(interests.filter(({ id }) => interest.id !== id))
                                }} className='del-item-btn'>
                                    <IoClose />
                                </button>
                            </div>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setInterests([...interests, {
                            interest: ' ',
                            id: interests[interests.length - 1].id + 1 || 0
                        }])
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