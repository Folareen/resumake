import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type CertificationType = {
    title: string,
    school: string,
    date: string,
    id: number
}

const Certification = () => {
    const [certifications, setCertifications] = useState<CertificationType[]>([{
        title: ' ',
        school: ' ',
        date: ' ',
        id: 0
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
        ).map(
            (certification, index) => {
                return {
                    title: certification.title,
                    school: certification.school,
                    date: certification.date,
                }
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
                            <div className='input-item' key={certification.id}>
                                <button
                                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                        e.preventDefault()
                                        setCertifications(certifications.filter((cert, i) => cert.id !== certification.id))
                                    }}
                                    className='del-item-btn'
                                >
                                    <IoClose />
                                </button>
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
                            id: certifications[certifications.length - 1].id + 1 || 0
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