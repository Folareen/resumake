import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'
import { RootState } from '../../../redux/store'

const CleanAndSimple = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)
    const { userData: { profile, contact, careerObjective, skills, education, workExperience } } = useSelector((state: RootState) => state.resume)

    return (
        <ResumeContainer resumeRef={resumeRef} resClassName='clean-and-simple' isSectioned={false}>

            <ResEl tag="h1" className='name'>
                {profile.name}
            </ResEl>
            <ResEl tag='h3' className='profession'>
                {profile.profession}
            </ResEl>
            <ResEl className='address'>
                {contact.address}
            </ResEl>

            <ResEl className='phone-email'>
                {contact.phone} |  {contact.email}
            </ResEl>


            <ResEl className='empty block' />
            <ResEl className='line' />
            <ResEl className='summary'>
                {careerObjective}
            </ResEl>
            <ResEl className='line' tag='div' />

            <ResEl className='block empty' />
            <ResEl tag='h2' className='block'>
                WORK EXPERIENCE
            </ResEl>

            {
                workExperience.map((work, index) => (
                    <>
                        <ResEl tag='h3' className='block'>
                            {work.jobTitle}
                        </ResEl>
                        <ResEl tag='h4' className='block'>
                            {work.company} // {work.startDate} // {work.endDate}
                        </ResEl>
                        <ResEl className='first-experience block' tag='div'>
                            <ul >
                                {
                                    work.jobDescription.map((desc, index) => (
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    ))
                                }
                            </ul>
                        </ResEl>
                        <ResEl className='block empty' />
                    </>
                ))
            }

            <ResEl tag='h2' className='block'>
                SKILLS
            </ResEl>
            <ResEl tag='div'>
                <ul>
                    {
                        skills.slice(0, Math.floor(skills.length / 2)).map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </ResEl>
            <ResEl tag='div'>
                <ul>
                    {
                        skills.slice(Math.floor(skills.length / 2), skills.length).map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </ResEl>


            <ResEl className='block empty' />
            <ResEl tag='h2' className='block'>
                EDUCATION
            </ResEl>
            {
                education.map((edu, index) => (
                    <>
                        <ResEl tag='h4' className='block'>
                            {edu.degree} - {edu.courseOfStudy}
                        </ResEl>
                        <ResEl className='block'>
                            {edu.school} // <small>{edu.startDate} - {edu.endDate}</small>
                        </ResEl>
                        <ResEl tag='h6' className='empty block' />
                    </>
                ))
            }


        </ResumeContainer>
    )
}

export default CleanAndSimple