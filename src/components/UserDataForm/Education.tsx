import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
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
    const [educations, setEducations] = useState<EducationType[]>([{
        courseOfStudy: ' ',
        school: ' ',
        degree: ' ',
        startDate: ' ',
        endDate: ' ',
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
            })
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
        const emptyEducationExists = educations.find(education => {
            return education.courseOfStudy === '' || education.school === '' || education.degree === '' || education.startDate === '' || education.endDate === ''
        })
        if (emptyEducationExists) {
            setEducations(educations.filter(education => {
                return education.courseOfStudy !== '' && education.school !== '' && education.degree !== '' && education.startDate !== '' && education.endDate !== ''
            }))
        }

    }, [educations])

    useEffect(() => {
        if (educations.length === 1) return
        inputContainerRef.current.scrollLeft += 300
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
                            <div className='input-item'>
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