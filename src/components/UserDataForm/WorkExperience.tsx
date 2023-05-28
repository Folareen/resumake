import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type WorkExperienceType = {
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string,
    jobDescription: string[]
}

const WorkExperience = () => {
    const [workExperiences, setWorkExperiences] = useState<WorkExperienceType[]>([])
    const [workExperience, setWorkExperience] = useState<{
        jobTitle: string,
        company: string,
        startDate: string,
        endDate: string,
        jobDescription: string
    }>({
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        jobDescription: ''
    })

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setUserData({
            key: 'workExperience',
            value: workExperiences
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkExperience({
            ...workExperience,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            Work Experience
            <form>
                <p>
                    {workExperiences.map((workExperience, index) => {
                        return (
                            <span key={index}>{JSON.stringify(workExperience)} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <div>
                        <input type='text' value={workExperience.jobTitle} onChange={onChange} placeholder='Job Title' name='jobTitle' />
                        <input type='text' value={workExperience.company} onChange={onChange} placeholder='company' name='company' />
                        <input type='date' value={workExperience.startDate} onChange={onChange} placeholder='start date' name='startDate' />
                        <input type='date' value={workExperience.endDate} onChange={onChange} placeholder='end date' name='endDate' />
                        <textarea value={workExperience.jobDescription} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setWorkExperience({
                                ...workExperience,
                                [e.target.name]: e.target.value
                            })
                        }} placeholder='job description' name='jobDescription' />
                    </div>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (workExperience.jobTitle && workExperience.company && workExperience.startDate && workExperience.endDate && workExperience.jobDescription.length > 0) {
                            setWorkExperiences([...workExperiences, {
                                jobTitle: workExperience.jobTitle,
                                company: workExperience.company,
                                startDate: workExperience.startDate,
                                endDate: workExperience.endDate,
                                jobDescription: workExperience.jobDescription.split('\n')
                            }])
                            setWorkExperience({
                                jobTitle: '',
                                company: '',
                                startDate: '',
                                endDate: '',
                                jobDescription: ''
                            })
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave}>
                    Save
                </button>
            </form >
        </div >
    )

}
export default WorkExperience