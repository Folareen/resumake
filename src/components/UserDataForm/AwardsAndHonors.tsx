import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type AwardsAndHonorsType = {
    title: string,
    date: string,
}

const AwardsAndHonours = () => {
    const [awardsAndHonors, setAwardsAndHonors] = useState<AwardsAndHonorsType[]>([
        {
            title: ' ',
            date: ' '
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
        const emptyAwardsAndHonorsExists = awardsAndHonors.find(awardAndHonour => {
            return awardAndHonour.title === '' || awardAndHonour.date === ''
        })
        if (emptyAwardsAndHonorsExists) {
            setAwardsAndHonors(awardsAndHonors.filter(awardAndHonour => {
                return awardAndHonour.title !== '' && awardAndHonour.date !== ''
            }))
        }
    }, [awardsAndHonors])

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
                                <div key={index} className='input-item'>
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