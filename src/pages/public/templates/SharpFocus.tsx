import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'
import { RootState } from '../../../redux/store'

const HeaderSection = () => {
    const { userData: { profile, careerObjective } } = useSelector((state: RootState) => state.resume)

    return (
        <div>
            <ResEl tag="h1" className='name'>
                {profile.name}
            </ResEl>
            <ResEl tag='h3' className='profession'>
                {profile.profession}
            </ResEl>
            {
                careerObjective &&
                <ResEl className='summary'>
                    {careerObjective}
                </ResEl>
            }

        </div>
    )
}
const MainRightSection = () => {
    const { userData: { contact, skills, education, interests, languages, hobbies } } = useSelector((state: RootState) => state.resume)

    return (
        <div>
            <ResEl className='block empty' />
            <ResEl tag='h3' className='block'>
                CONTACT
            </ResEl>
            <ResEl className='line' tag='div' />

            {/* <ResEl className='address' tag='h6'>
                {contact.address}
            </ResEl> */}
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
            <ResEl className='line' tag='div' />

            <ResEl className='block' tag='div'>
                <ul >
                    {
                        skills.map((skill, index) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </ResEl>

            <ResEl className='block empty' />

            {
                education &&
                <>
                    <ResEl className='block empty' />
                    <ResEl tag='h3' className='block'>
                        EDUCATION
                    </ResEl>
                    <ResEl className='line' tag='div' />

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
                </>
            }

            {
                interests &&
                <>
                    <ResEl className='block empty' />
                    <ResEl tag='h3' className='block'>
                        INTERESTS
                    </ResEl>
                    <ResEl className='line' tag='div' />

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
                </>
            }

            {
                languages &&
                <>
                    <ResEl className='block empty' />
                    <ResEl tag='h3' className='block'>
                        LANGUAGES
                    </ResEl>
                    <ResEl className='line' tag='div' />

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
                </>
            }

            {
                hobbies &&
                <>
                    <ResEl className='block empty' />
                    <ResEl tag='h3' className='block'>
                        HOBBIES
                    </ResEl>
                    <ResEl className='line' tag='div' />

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
                </>
            }

        </div>
    )
}
const MainLeftSection = () => {
    const { userData: { workExperience, projects, certifications, awardsAndHonors } } = useSelector((state: RootState) => state.resume)

    return (
        <div>
            <ResEl className='block empty' />

            {
                workExperience &&
                <>
                    <ResEl tag='h3' className='block'>
                        WORK EXPERIENCE
                    </ResEl>
                    <ResEl className='line' tag='div' />

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
                </>
            }


            {
                projects &&
                <>
                    <ResEl tag='h3' className='block'>
                        PROJECTS
                    </ResEl>
                    <ResEl className='line' tag='div' />

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

                </>
            }


            {
                certifications &&
                <>
                    <ResEl tag='h3' className='block'>
                        CERTIFICATIONS
                    </ResEl>
                    <ResEl className='line' tag='div' />

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
                </>
            }


            {
                awardsAndHonors &&
                <>
                    <ResEl tag='h3' className='block'>
                        AWARDS
                    </ResEl>
                    <ResEl className='line' tag='div' />

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
                </>
            }

        </div>
    )
}
const FooterSection = () => (
    <div>
    </div>
)


const SharpFocus = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)


    return (
        <ResumeContainer
            resumeRef={resumeRef} resClassName='sharp-focus'
            isSectioned={true}
            HeaderSection={HeaderSection}
            MainLeftSection={MainLeftSection}
            MainRightSection={MainRightSection}
            FooterSection={FooterSection}
            mainLayout={'col-70-30'}
        />
    )
}

export default SharpFocus