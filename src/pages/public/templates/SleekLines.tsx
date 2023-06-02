import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'
import { RootState } from '../../../redux/store'

const HeaderSection = () => {
    const { userData: { profile: { name, profession }, contact: { phone, email, website } } } = useSelector((state: RootState) => state.resume)

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
                {/* <ResEl className='address' tag='h6'>
                    {address}
                </ResEl> */}
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
    const { userData: { workExperience, projects, certifications, awardsAndHonors } } = useSelector((state: RootState) => state.resume)
    return (
        <div className='main-right'>

            <>
                {
                    workExperience &&
                    <div className='experience'>
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
                    </div>
                }

            </>

            <>
                {
                    certifications &&
                    <div className='experience'>
                        <ResEl tag='h3' className='block'>
                            CERTIFICATIONS
                        </ResEl>

                        {
                            certifications.map((cert, index) => (
                                <>
                                    <ResEl tag='h4' className='block'>
                                        {cert.title}
                                    </ResEl>
                                    <ResEl tag='h5' className='block' >
                                        {cert.school}
                                    </ResEl>
                                    <ResEl tag='h4' className='block'>
                                        {cert.title}
                                    </ResEl>
                                    <ResEl className='block empty' />
                                </>
                            ))
                        }
                    </div>
                }

            </>

            <>
                {
                    projects &&
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
                }
            </>


            <>
                {
                    awardsAndHonors &&
                    <div className="projects">
                        <ResEl tag='h3' className='block'>
                            AWARDS
                        </ResEl>

                        {
                            awardsAndHonors.map((awardsAndHonor, index) => (
                                <>
                                    <ResEl tag='h4' className='block'>
                                        {awardsAndHonor.title}
                                    </ResEl>
                                    <ResEl className='block'>
                                        <small>{awardsAndHonor.date}</small>
                                    </ResEl>
                                    <ResEl tag='h6' className='empty block' />
                                </>
                            ))
                        }
                    </div>
                }
            </>


        </div>
    )
}
const MainLeftSection = () => {
    const { userData: { careerObjective, skills, education, interests, languages, hobbies } } = useSelector((state: RootState) => state.resume)
    return (
        <div className='main-left'>

            {
                careerObjective &&
                <div className='career-objective'>

                    <ResEl tag='h3' className='block'>
                        CAREER OBJECTIVE
                    </ResEl>
                    <ResEl className='summary'>
                        {careerObjective}
                    </ResEl>
                </div>
            }


            <div className='skills'>
                <ResEl className='block empty' />
                <ResEl tag='h3' className='block'>
                    SKILLS
                </ResEl>

                <ResEl className='block' tag='div'>
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


            {
                education &&
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
            }

            {
                interests &&
                <div className='education'>
                    <ResEl className='block empty' />
                    <ResEl tag='h3' className='block'>
                        INTERESTS
                    </ResEl>

                    <ResEl className='block' tag='div'>
                        <ul >
                            {
                                interests.map((interest) => (
                                    <li>
                                        {interest}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                </div>
            }

            {
                languages &&
                <div className='education'>
                    <ResEl className='block empty' />
                    <ResEl tag='h3' className='block'>
                        LANGUAGES
                    </ResEl>

                    <ResEl className='block' tag='div'>
                        <ul >
                            {
                                languages.map((language) => (
                                    <li>
                                        {language}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                </div>
            }

            {
                hobbies &&
                <div className='education'>
                    <ResEl className='block empty' />
                    <ResEl tag='h3' className='block'>
                        HOBBIES
                    </ResEl>

                    <ResEl className='block' tag='div'>
                        <ul >
                            {
                                hobbies.map((hobby) => (
                                    <li>
                                        {hobby}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                </div>
            }


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