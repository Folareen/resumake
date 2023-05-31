import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nextForm, previousForm, setUserData } from '../../redux/features/resumeSlice'
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
    const { userData: { currentFormIndex, numOfFormsFilled } } = useSelector((state: RootState) => state.resume)
    const dispatch = useDispatch()

    const forms = [
        {
            form: <Profile />,
            required: true,
            title: 'profile'
        },
        {
            form: <Contact />,
            required: true,
            title: 'contact'
        },
        {
            form: <CareerObjective />,
            required: false,
            title: 'careerObjective'
        },
        {
            form: <Skills />,
            required: true,
            title: 'skills'
        },
        {
            form: <Education />,
            required: false,
            title: 'education'
        },
        {
            form: <WorkExperience />,
            required: false,
            title: 'workExperience'
        },
        {
            form: <Projects />,
            required: false,
            title: 'projects'
        },
        {
            form: <Certifications />,
            required: false,
            title: 'certifications'
        },
        {
            form: <AwardsAndHonors />,
            required: false,
            title: 'awardsAndHonors'
        },
        {
            form: <Interests />,
            required: false,
            title: 'interests'
        },
        {
            form: <Languages />,
            required: false,
            title: 'languages'
        },
        {
            form: <Hobbies />,
            required: false,
            title: 'hobbies'
        }
    ]

    const navigate = useNavigate()


    useEffect(() => {
        if (numOfFormsFilled == 7) {
            navigate('/templates')
        }
    }, [numOfFormsFilled])

    return (
        <div className='user-data-form'>

            <div className={'user-data-form__container'} style={{ transform: `translateX(-${currentFormIndex}00vw)` }} >
                {
                    forms.map((form, index) => (
                        <React.Fragment key={index}>
                            {form.form}
                        </React.Fragment>
                    ))
                }
            </div>

            <div className='progress'>
                <div className='progress__bar' style={{ width: `calc((90% / 7) * ${numOfFormsFilled})` }} >

                </div>

            </div>

            <div className='prev-skip-btns'>
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
                        dispatch(setUserData({
                            key: forms[currentFormIndex]['title'],
                            value: null
                        }))
                    }}
                >
                    Skip
                </button>
            </div>
        </div>
    )
}

export default UserDataForm