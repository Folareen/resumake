import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type AwardsAndHonorsType = {
    title: string,
    date: string,
    id: number
}

const AwardsAndHonours = () => {
    const [awardsAndHonors, setAwardsAndHonors] = useState<AwardsAndHonorsType[]>([
        {
            title: ' ',
            date: ' ',
            id: 0
        }
    ])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (awardsAndHonors.length === 0) return
        const filteredAwardsAndHonors = awardsAndHonors.filter(
            (awardAndHonour) => {
                return awardAndHonour.title !== '' && awardAndHonour.date.length !== 0
            }
        ).map(
            (awardAndHonor, index) => {
                return {
                    title: awardAndHonor.title,
                    date: awardAndHonor.date,
                }
            }
        )
        dispatch(setUserData({
            key: 'awardsAndHonors',
            value: filteredAwardsAndHonors
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        let allAwardsAndHonors = awardsAndHonors
        let currAwardsAndHonor = awardsAndHonors[index]
        currAwardsAndHonor[e.target.name] = e.target.value
        allAwardsAndHonors[index] = currAwardsAndHonor
        setAwardsAndHonors(allAwardsAndHonors)
    }

    useEffect(() => {
        if (awardsAndHonors.length === 1) return
        inputContainerRef.current.scrollTop += 100
    }, [awardsAndHonors])


    return (
        <div>
            <form>
                <h2>
                    Awards and Honors
                </h2>
                <div className='multiple-input-container multiple' ref={inputContainerRef}>
                    {
                        awardsAndHonors.map((awardAndHonour, index) => {
                            return (
                                <div key={awardAndHonour.id} className='input-item' >
                                    <button
                                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                            e.preventDefault()
                                            setAwardsAndHonors(awardsAndHonors.filter((awh) => awh.id !== awardAndHonour.id))
                                        }}
                                        className='del-item-btn'
                                    >
                                        <IoClose />
                                    </button>
                                    <input type='text' onChange={(e) => onChange(e, index)} placeholder='title' name='title' />
                                    <input type='date' onChange={(e) => onChange(e, index)} placeholder='date' name='date' />
                                </div>
                            )
                        })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setAwardsAndHonors([...awardsAndHonors, {
                            title: ' ',
                            date: ' ',
                            id: awardsAndHonors[awardsAndHonors.length - 1].id + 1 || 0
                        }])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={awardsAndHonors.length === 0} className='save'>
                    Save
                </button>
            </form >
        </div >
    )

}
export default AwardsAndHonours