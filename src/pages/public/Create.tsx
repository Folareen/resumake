import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import UserDataForm from '../../components/UserDataForm'

const Create = () => {
    const [fillForm, setFillForm] = useState<boolean>(false)
    const [buildWithEditor, setBuildWithEditor] = useState<boolean>(false)

    return (
        <div>
            {
                !fillForm && !buildWithEditor &&
                (
                    <div>
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
                )
            }
            {
                fillForm &&
                <div>
                    <button onClick={() => {
                        setFillForm(false)
                    }}>
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
                    }}>
                        <BiArrowBack />
                    </button>
                    <Link to='/templates'>Build with template </Link>
                    <Link to='/create/blank'>Build with a blank document</Link>
                </div>
            }




        </div>
    )
}

export default Create