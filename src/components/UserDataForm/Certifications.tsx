import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type CertificationType = {
    title: string,
    school: string,
    date: string,
}

const Certification = () => {
    const [certifications, setCertifications] = useState<CertificationType[]>([])
    const [certification, setCertification] = useState<CertificationType>({
        title: '',
        school: '',
        date: '',
    })

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (certifications.length === 0) return
        dispatch(setUserData({
            key: 'certifications',
            value: certifications
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCertification({
            ...certification,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            Certifications
            <form>
                <p>
                    {certifications.map((certification, index) => {
                        return (
                            <span key={index}>{JSON.stringify(certification)} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <div>
                        <input type='text' value={certification.title} onChange={onChange} placeholder='title' name='title' />
                        <input type='text' value={certification.school} onChange={onChange} placeholder='school' name='school' />
                        <input type='date' value={certification.date} onChange={onChange} placeholder='date' name='date' />
                    </div>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (certification.title && certification.school && certification.date) {
                            setCertifications([...certifications, certification])
                            setCertification({
                                title: '',
                                school: '',
                                date: '',
                            })
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave} disabled={certifications.length === 0}>
                    Save
                </button>
            </form >
        </div >
    )

}
export default Certification