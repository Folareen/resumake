import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type CertificationType = {
    title: string,
    school: string,
    date: string,
}

const Certification = () => {
    const [certifications, setCertifications] = useState<CertificationType[]>([{
        title: ' ',
        school: ' ',
        date: ' '
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (certifications.length === 0) return
        const filteredCertifications = certifications.filter(
            (certification) => {
                return certification.title !== '' && certification.school.length !== 0 && certification.date.length !== 0
            }
        )
        dispatch(setUserData({
            key: 'certifications',
            value: filteredCertifications
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        let allCertifications = certifications
        let currCertification = certifications[index]
        currCertification[e.target.name] = e.target.value
        allCertifications[index] = currCertification
        setCertifications(allCertifications)
    }

    useEffect(() => {
        const emptyCertificationExists = certifications.find(certification => {
            return certification.title === '' || certification.school === '' || certification.date === ''
        })
        if (emptyCertificationExists) {
            setCertifications(certifications.filter(certification => {
                return certification.title !== '' && certification.school !== '' && certification.date !== ''
            }))
        }
    }, [certifications])

    useEffect(() => {
        if (certifications.length === 1) return
        inputContainerRef.current.scrollTop += 100
    }, [certifications])

    return (
        <div>
            <form>
                <h2>
                    Certifications
                </h2>

                <div className='multiple-input-container multiple' ref={inputContainerRef}>
                    {certifications.map((certification, index) => {
                        return (
                            <div key={index} className='input-item'>
                                <input type='text' onChange={(e) => onChange(e, index)} placeholder='title' name='title' />
                                <input type='text' onChange={(e) => onChange(e, index)} placeholder='school' name='school' />
                                <input type='date' onChange={(e) => onChange(e, index)} placeholder='date' name='date' />
                            </div>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setCertifications([...certifications, {
                            title: ' ',
                            school: ' ',
                            date: ' ',
                        }])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={certifications.length === 0} className='save'> Save </button>
            </form >
        </div >
    )

}
export default Certification