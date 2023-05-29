import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'
import { RootState } from '../../../redux/store'

const HeaderSection = () => {
    const { userData: { profile: { name, profession } } } = useSelector((state: RootState) => state.resume)

    return (
        <div className='header'>
            <ResEl tag="h1" className='name'>
                {name}
            </ResEl>
            <ResEl tag="h3" className='profession'>
                {profession}
            </ResEl>
        </div>
    )
}
const MainRightSection = () => {
    const { userData: { workExperience, projects } } = useSelector((state: RootState) => state.resume)

    return (
        <div className='main-right'>

            <ResEl className='block empty' />
            <ResEl tag='h3' className='block'>
                WORK EXPERIENCE
            </ResEl>

            {
                workExperience.map((work, index) => (
                    <>
                        <ResEl tag='h4' className='block'>
                            {work.jobTitle}
                        </ResEl>
                        <ResEl tag='h5' className='block' >
                            {work.company} * {work.startDate} to {work.endDate}
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



            <ResEl className='block empty' />
            <ResEl tag='h3' className='block'>
                PROJECTS
            </ResEl>

            {
                projects.map((project, index) => (
                    <>
                        <ResEl tag='h4' className='block'>
                            {project.title}
                        </ResEl>
                        <ResEl className='first-experience block' tag='div'>
                            <ul >
                                {
                                    project.description.map((desc, index) => (
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    ))

                                }
                            </ul>
                        </ResEl>
                        {
                            project.links.map((link, index) => (
                                <ResEl className='block' key={index}>
                                    <a href={link} target='_blank' rel="noreferrer">{link}</a>
                                </ResEl>
                            ))
                        }
                        <ResEl className='block empty' />
                    </>
                ))
            }

        </div>
    )
}
const MainLeftSection = () => {
    const { userData: { careerObjective, contact, skills, education } } = useSelector((state: RootState) => state.resume)

    return (
        <div className='main-left'>
            <ResEl tag='h3' className='block'>
                CAREER OBJECTIVE
            </ResEl>
            <ResEl className='summary'>
                {careerObjective}
            </ResEl>

            <ResEl className='block empty' />
            <ResEl tag='h3' className='block'>
                CONTACT
            </ResEl>

            <ResEl className='address' tag='h6'>
                {contact.address}
            </ResEl>
            <ResEl className='phone' tag='h6'>
                {contact.phone}
            </ResEl>
            <ResEl className='email' tag='h6'>
                {contact.email}
            </ResEl>
            <ResEl className='website' tag='h6'>
                {contact.website}
            </ResEl>

            <ResEl className='block empty' />
            <ResEl tag='h3' className='block'>
                SKILLS
            </ResEl>

            <ResEl className='block' tag='div'>
                <ul >
                    {
                        skills.map((skill) => (
                            <li>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </ResEl>

            <ResEl className='block empty' />
            <ResEl tag='h3' className='block'>
                EDUCATION
            </ResEl>


            {
                education.map((edu, index) => (
                    <>
                        <ResEl tag='h4' className='block'>
                            {edu.degree}
                        </ResEl>
                        <ResEl className='block'>
                            <b>{edu.courseOfStudy}</b>
                        </ResEl>
                        <ResEl className='block'>
                            {edu.school}
                        </ResEl>
                        <ResEl className='block'>
                            <small>{edu.startDate} - {edu.endDate}</small>
                        </ResEl>
                        <ResEl tag='h6' className='empty block' />
                    </>
                ))
            }

        </div>
    )
}
const FooterSection = () => (
    <div>
    </div>
)


const ModernMinimalism = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)


    return (
        <ResumeContainer
            resumeRef={resumeRef} resClassName='modern-minimalism'
            isSectioned={true}
            HeaderSection={HeaderSection}
            MainLeftSection={MainLeftSection}
            MainRightSection={MainRightSection}
            FooterSection={FooterSection}
            mainLayout={'col-40-60'}
        />
    )
}

export default ModernMinimalism