import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type WorkExperienceType = {
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string,
    jobDescription: string
}

const WorkExperience = () => {
    const [workExperiences, setWorkExperiences] = useState<WorkExperienceType[]>([{
        jobTitle: ' ',
        company: ' ',
        startDate: ' ',
        endDate: ' ',
        jobDescription: ' '
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (workExperiences.length === 0) return
        const filteredWorkExperiences = workExperiences.filter(workExperience => {
            return workExperience.jobTitle !== '' && workExperience.company !== '' && workExperience.startDate !== '' && workExperience.endDate !== '' && workExperience.jobDescription.length > 0
        })
        dispatch(setUserData({
            key: 'workExperience',
            value: filteredWorkExperiences.map(workExperience => {
                return {
                    ...workExperience,
                    jobDescription: workExperience.jobDescription.split('\n')
                }
            })
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        let allWorkExperiences = workExperiences
        let currWorkExperience = workExperiences[index]
        currWorkExperience[e.target.name] = e.target.value
        allWorkExperiences[index] = currWorkExperience
        setWorkExperiences(allWorkExperiences)
    }

    useEffect(() => {
        const emptyWorkExperienceExists = workExperiences.find(workExperience => {
            return workExperience.jobTitle === '' || workExperience.company === '' || workExperience.startDate === '' || workExperience.endDate === '' || workExperience.jobDescription === ''
        })
        if (emptyWorkExperienceExists) {
            setWorkExperiences(workExperiences.filter(workExperience => {
                return workExperience.jobTitle !== '' && workExperience.company !== '' && workExperience.startDate !== '' && workExperience.endDate !== '' && workExperience.jobDescription !== ''
            }))
        }
    }, [workExperiences])

    useEffect(() => {
        inputContainerRef.current.scrollLeft += 300
    }, [workExperiences])


    return (
        <div>
            <form>
                <h2>
                    Work Experience
                </h2>

                <div className='multiple-input-container multiple' ref={inputContainerRef}>
                    {workExperiences.map((workExperience, index) => {
                        return (
                            <>
                                <div className='input-item'>
                                    <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='Job title' name='jobTitle' className='' />

                                    <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='company' name='company' />

                                    <input type='date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='Start date' name='startDate' />

                                    <input type='date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='End date' name='endDate' />

                                    <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e, index)} placeholder='Job description' name='jobDescription' />

                                </div>
                            </>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setWorkExperiences([...workExperiences, {
                            jobTitle: ' ',
                            company: ' ',
                            startDate: ' ',
                            endDate: ' ',
                            jobDescription: ' '
                        }])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={workExperiences.length === 0}>
                    Save
                </button>
            </form >
        </div >
    )

}
export default WorkExperience