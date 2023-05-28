import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'
import { RootState } from '../../../redux/store'

const HeaderSection = () => {
    const { userData: { profile: { name, profession }, contact: { address, phone, email, website } } } = useSelector((state: RootState) => state.resume)

    return (
        <div className='header'>
            <div className='name-profession'>
                <ResEl tag="h1" className='name'>
                    {name}
                </ResEl>
                <ResEl tag="h3" className='profession'>
                    {profession}
                </ResEl>
            </div>
            <div className='contact'>
                <ResEl className='address' tag='h6'>
                    {address}
                </ResEl>
                <ResEl className='phone' tag='h6'>
                    {phone}
                </ResEl>
                <ResEl className='email' tag='h6'>
                    {email}
                </ResEl>
                <ResEl className='website' tag='h6'>
                    {website}
                </ResEl>
            </div>
        </div>
    )
}
const MainRightSection = () => {
    const { userData: { workExperience, projects } } = useSelector((state: RootState) => state.resume)
    return (
        <div className='main-right'>

            <div className='experience'>
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
                            <ResEl className='first-experience block'>
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

            </div>

            <div className="projects">

                <ResEl tag='h3' className='block'>
                    PROJECTS
                </ResEl>

                {
                    projects.map((project, index) => (
                        <>
                            <ResEl tag='h4' className='block'>
                                {project.title}
                            </ResEl>
                            <ResEl className='first-experience block'>
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


        </div>
    )
}
const MainLeftSection = () => {
    const { userData: { careerObjective, skills, education } } = useSelector((state: RootState) => state.resume)
    return (
        <div className='main-left'>

            <div className='career-objective'>
                <ResEl className='block empty' />
                <ResEl tag='h3' className='block'>
                    CAREER OBJECTIVE
                </ResEl>
                <ResEl className='summary'>
                    {careerObjective}
                </ResEl>
            </div>


            <div className='skills'>
                <ResEl className='block empty' />
                <ResEl tag='h3' className='block'>
                    SKILLS
                </ResEl>

                <ResEl className='block'>
                    <ul >
                        {skills.map(
                            (skill) => (
                                <li>
                                    {skill}
                                </li>
                            )
                        )}
                    </ul>
                </ResEl>
            </div>

            <div className='education'>
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

        </div>
    )
}
const FooterSection = () => (
    <div>
    </div>
)


const SleekLines = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)


    return (
        <ResumeContainer
            resumeRef={resumeRef} resClassName='sleek-lines'
            isSectioned={true}
            HeaderSection={HeaderSection}
            MainLeftSection={MainLeftSection}
            MainRightSection={MainRightSection}
            FooterSection={FooterSection}
            mainLayout={'col-40-60'}
        />
    )
}

export default SleekLines