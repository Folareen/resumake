import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import React, { useState, useRef, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../../../firebase.config'
import { saveResume } from '../../redux/features/resumeSlice'
import { RootState } from '../../redux/store'
import { Bars } from 'react-loader-spinner'

type ModalProps = {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const SaveResumeModal = ({ modalVisible, setModalVisible }: ModalProps) => {
    const { user } = useSelector((state: RootState) => state.auth)
    const { resumeID } = useParams()
    const dispatch = useDispatch()

    const [submitting, setSubmitting] = useState(false)

    const [resumeName, setResumeName] = useState<string>(resumeID?.split('-').join(' ') as string || '')

    const navigate = useNavigate()

    useEffect(() => {
        setModalVisible(false)
    }, [resumeID])


    const handleSaveResume = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            setSubmitting(true)
            const resToSave = document.querySelector('.resume')?.cloneNode(true)

            if (user) {
                if (resumeName) {
                    const resumeId = resumeName?.toLowerCase().split(' ').join('-')
                    await setDoc(doc(db, `${user.uid}-${user.email}`, resumeId), {
                        title: resumeName,
                        id: resumeId,
                        resume: resToSave.outerHTML
                    })
                    if (resumeID) {
                        await deleteDoc(doc(db, `${user.uid}-${user.email}`, resumeID))
                    }
                    navigate(`/saved-resumes/${resumeId}`)
                    toast.success('Resume saved successfully!')
                } else {
                    throw new Error('Resume name cannot be empty!')
                }
            } else {
                dispatch(saveResume({ name: resumeName, res: resToSave.outerHTML }))
                toast.error('Please login to save resume to your account')
                navigate('/login')
            }
        } catch (error: any) {
            toast.error(error?.message || 'Unable to save resume.\n Pls try again.')
        } finally {
            setSubmitting(false)
        }
    }



    return (
        <div className={`modal ${modalVisible ? 'modal--visible' : 'modal--hidden'}`}>

            <form className='modal__content'>

                <button className='modal__close-btn' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault()
                    setModalVisible(false)
                }}>
                    <IoClose />
                </button>

                <div >
                    <label htmlFor='resume name'>
                        Resume name
                    </label>
                    <input type='text' value={resumeName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setResumeName(e.target.value)
                    }} className='input' />
                </div>

                <button onClick={handleSaveResume} className='submit-btn' disabled={submitting}>
                    {
                        submitting ?
                            <Bars
                                height="20"
                                width="20"
                                color="white"
                                ariaLabel="signing in..."
                                wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                wrapperClass=""
                                visible={true}
                            />
                            :
                            'Save'
                    }
                </button>
            </form>

        </div>
    )
}

export default SaveResumeModal