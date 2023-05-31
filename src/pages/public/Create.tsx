import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import UserDataForm from '../../components/UserDataForm'

const Create = () => {
    const [fillForm, setFillForm] = useState<boolean>(false)
    const [buildWithEditor, setBuildWithEditor] = useState<boolean>(false)

    return (
        <div className='create-page'>
            {
                !fillForm && !buildWithEditor &&
                (
                    <div className='choose-method'>
                        <div className='methods-btn-box'>
                            <button onClick={() => {
                                setFillForm(true)
                            }}>
                                Fill form to create resume
                            </button>
                            <button onClick={() => {
                                setBuildWithEditor(true)
                            }}>
                                Build resume in editor
                            </button>
                        </div>
                    </div>
                )
            }
            {
                fillForm &&
                <div className='user-data-form-wrapper'>
                    <button onClick={() => {
                        setFillForm(false)
                    }} className='back-btn'>
                        <BiArrowBack />
                    </button>
                    <UserDataForm />
                </div>
            }
            {
                buildWithEditor &&
                <div>
                    <button onClick={() => {
                        setBuildWithEditor(false)
                    }} className='back-btn'>
                        <BiArrowBack />
                    </button>
                    <div className='choose-method' style={{ height: 'calc(100vh - 110px)' }}>
                        <div className='methods-btn-box'>
                            <Link to='/templates'>Build with template </Link>
                            <Link to='/create/blank'>Build with a blank document
                            </Link>
                        </div>
                    </div>
                </div>
            }




        </div>
    )
}

export default Create