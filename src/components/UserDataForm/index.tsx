import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextForm, previousForm } from '../../redux/features/resumeSlice'
import { RootState } from '../../redux/store'
import AwardsAndHonors from './AwardsAndHonors'
import CareerObjective from './CareerObjective'
import Certifications from './Certifications'
import Contact from './Contact'
import Education from './Education'
import Hobbies from './Hobbies'
import Interests from './Interests'
import Languages from './Languages'
import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'
import WorkExperience from './WorkExperience'

const UserDataForm = () => {
    const { userData: { currentFormIndex } } = useSelector((state: RootState) => state.resume)
    const dispatch = useDispatch()

    const forms = [
        {
            form: <Profile />,
            required: true
        },
        {
            form: <Contact />,
            required: true
        },
        {
            form: <CareerObjective />,
            required: true
        },
        {
            form: <Skills />,
            required: true
        },
        {
            form: <Education />,
            required: false
        },
        {
            form: <WorkExperience />,
            required: false
        },
        {
            form: <Projects />,
            required: false
        },
        {
            form: <Certifications />,
            required: false
        },
        {
            form: <AwardsAndHonors />,
            required: false
        },
        {
            form: <Languages />,
            required: false
        },
        {
            form: <Interests />,
            required: false
        },
        {
            form: <Hobbies />,
            required: false
        }
    ]

    return (
        <div>
            UserDataForm
            <div>
                {
                    forms[currentFormIndex]['form']
                }
            </div>

            <div>
                <button
                    disabled={!(currentFormIndex > 0)}
                    onClick={() => {
                        dispatch(previousForm())
                    }}
                >
                    Previous
                </button>
                <button
                    disabled={forms[currentFormIndex]['required'] || (currentFormIndex == forms.length - 1)}
                    onClick={() => {
                        dispatch(nextForm())
                    }}
                >
                    Skip
                </button>
                <button style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    Generate resume
                </button>
            </div>
        </div>
    )
}

export default UserDataForm