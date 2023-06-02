import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'
import { RootState } from '../../../redux/store'

const CleanAndSimple = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)
    const { userData: { profile, contact, careerObjective, skills, education, workExperience, projects, certifications, awardsAndHonors, interests, languages, hobbies } } = useSelector((state: RootState) => state.resume)

    return (
        <ResumeContainer resumeRef={resumeRef} resClassName='clean-and-simple' isSectioned={false}>

            <ResEl tag="h1" className='name'>
                {profile.name}
            </ResEl>
            <ResEl tag='h3' className='profession'>
                {profile.profession}
            </ResEl>
            {/* <ResEl className='address'>
                {contact.address}
            </ResEl> */}

            <ResEl className='phone-email'>
                {contact.phone} |  {contact.email}
            </ResEl>


            <ResEl className='empty block' />
            <ResEl className='line' />
            <ResEl className='summary'>
                {careerObjective}
            </ResEl>
            <ResEl className='line' tag='div' />

            {
                workExperience &&
                <>
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
                </>
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


            {
                education &&
                <>
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
                </>
            }


            {
                projects &&
                <div className="projects">
                    <ResEl tag='h3' className='block'>
                        PROJECTS
                    </ResEl>

                    {
                        projects.map((project, index) => (
                            <>
                                <ResEl tag='h3' className='block'>
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
                                <ResEl className='first-experience block' tag='div'>
                                    <ul >
                                        {
                                            project.links.map((desc, index) => (
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


            {
                certifications &&
                <>
                    <ResEl tag='h2' className='block'>
                        CERTIFICATIONS
                    </ResEl>
                    {
                        certifications.map((cert, index) => (
                            <>
                                <ResEl tag='h4' className='block'>
                                    {cert.title}
                                </ResEl>
                                <ResEl className='block'>
                                    {cert.school} // <small>{cert.date}</small>
                                </ResEl>
                                <ResEl tag='h6' className='empty block' />
                            </>
                        ))
                    }
                </>
            }

            {
                awardsAndHonors &&
                <>
                    <ResEl tag='h2' className='block'>
                        AWARDS AND HONORS
                    </ResEl>
                    {
                        awardsAndHonors.map((awardAndHonor, index) => (
                            <>
                                <ResEl tag='h4' className='block'>
                                    {awardAndHonor.title}
                                </ResEl>
                                <ResEl className='block'>
                                    <small>{awardAndHonor.date}</small>
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
                    <ResEl tag='h2' className='block'>
                        INTERESTS
                    </ResEl>
                    <ResEl tag='div'>
                        <ul>
                            {
                                interests.slice(0, Math.floor(interests.length / 2)).map((interest, index) => (
                                    <li key={index}>
                                        {interest}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                    <ResEl tag='div'>
                        <ul>
                            {
                                interests.slice(Math.floor(interests.length / 2), interests.length).map((interest, index) => (
                                    <li key={index}>
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
                    <ResEl tag='h2' className='block'>
                        LANGUAGES
                    </ResEl>
                    <ResEl tag='div'>
                        <ul>
                            {
                                languages.slice(0, Math.floor(languages.length / 2)).map((language, index) => (
                                    <li key={index}>
                                        {language}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                    <ResEl tag='div'>
                        <ul>
                            {
                                languages.slice(Math.floor(languages.length / 2), languages.length).map((language, index) => (
                                    <li key={index}>
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
                    <ResEl tag='h2' className='block'>
                        HOBBIES
                    </ResEl>
                    <ResEl tag='div'>
                        <ul>
                            {
                                hobbies.slice(0, Math.floor(hobbies.length / 2)).map((hobby, index) => (
                                    <li key={index}>
                                        {hobby}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                    <ResEl tag='div'>
                        <ul>
                            {
                                hobbies.slice(Math.floor(hobbies.length / 2), hobbies.length).map((hobby, index) => (
                                    <li key={index}>
                                        {hobby}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                </>
            }


        </ResumeContainer>
    )
}

export default CleanAndSimple