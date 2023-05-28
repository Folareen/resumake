import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type EducationType = {
    courseOfStudy: string,
    school: string,
    degree: string,
    startDate: string,
    endDate: string,
}

const Education = () => {
    const [educations, setEducations] = useState<EducationType[]>([])
    const [education, setEducation] = useState<EducationType>({
        courseOfStudy: '',
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
    })

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setUserData({
            key: 'education',
            value: educations
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>Education
            <form>
                <p>
                    {educations.map((education, index) => {
                        return (
                            <span key={index}>{JSON.stringify(education)} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <div>
                        <input type='text' value={education.courseOfStudy} onChange={onChange} placeholder='course of study' name='courseOfStudy' />
                        <input type='text' value={education.school} onChange={onChange} placeholder='school' name='school' />
                        <input type='text' value={education.degree} onChange={onChange} placeholder='degree' name='degree' />
                        <input type='date' value={education.startDate} onChange={onChange} placeholder='start date' name='startDate' />
                        <input type='date' value={education.endDate} onChange={onChange} placeholder='end date' name='endDate' />
                    </div>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (education) {
                            setEducations([...educations, education])
                            setEducation({
                                courseOfStudy: '',
                                school: '',
                                degree: '',
                                startDate: '',
                                endDate: '',
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
export default Education