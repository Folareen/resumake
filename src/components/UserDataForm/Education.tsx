import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type EducationType = {
    courseOfStudy: string,
    school: string,
    degree: string,
    startDate: string,
    endDate: string,
    id: number
}

const Education = () => {
    const [educations, setEducations] = useState<EducationType[]>([{
        courseOfStudy: ' ',
        school: ' ',
        degree: ' ',
        startDate: ' ',
        endDate: ' ',
        id: 0
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (educations.length === 0) return
        dispatch(setUserData({
            key: 'education',
            value: educations.filter(education => {
                return education.courseOfStudy !== '' && education.school !== '' && education.degree !== '' && education.startDate !== '' && education.endDate !== ''
            }).map(education => ({ courseOfStudy: education.courseOfStudy, school: education.school, degree: education.degree, startDate: education.startDate, endDate: education.endDate }))
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let allEducations = educations
        let currEducation = educations[index]
        currEducation[e.target.name] = e.target.value
        allEducations[index] = currEducation
        setEducations(allEducations)
    }

    useEffect(() => {
        if (educations.length === 1) return
        inputContainerRef.current.scrollTop += 100
    }, [educations])

    return (
        <div>
            <form>
                <h2>
                    Education
                </h2>

                <div className='multiple-input-container multiple' ref={inputContainerRef}>
                    {educations.map((education, index) => {
                        return (
                            <div className='input-item' key={education.id}>
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault()
                                    setEducations(educations.filter(edu => education.id !== edu.id))
                                }} className='del-item-btn'>
                                    <IoClose />
                                </button>
                                <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='Course of study' name='courseOfStudy' className='' />

                                <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='School' name='school' />

                                <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='degree' name='degree' />

                                <input type='date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='Start date' name='startDate' />

                                <input type='date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='End date' name='endDate' />
                            </div>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setEducations([...educations, {
                            courseOfStudy: ' ',
                            school: ' ',
                            degree: ' ',
                            startDate: ' ',
                            endDate: ' ',
                            id: educations[educations.length - 1]['id'] + 1 || 0
                        }])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={educations.length === 0} className="save">
                    Save
                </button>

            </form >
        </div >
    )

}
export default Education