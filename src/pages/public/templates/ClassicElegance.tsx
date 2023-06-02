import React, { useRef, useState } from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaAddressCard, FaAward, FaGlobe, FaGraduationCap } from 'react-icons/fa'
import { IoLanguage, IoLocationSharp } from 'react-icons/io5'
import { MdEmail, MdWorkHistory } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { GrCertificate, GrProjects } from 'react-icons/gr'
import { MdOutlineInterests } from "react-icons/md";
import { useSelector } from 'react-redux'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'
import { RootState } from '../../../redux/store'

const HeaderSection = () => {
    const { userData: { profile: { name, profession }, contact: { phone, email, website } } } = useSelector((state: RootState) => state.resume)

    const [isMale, setIsMale] = useState<boolean>(true)

    return (
        <div className='header'>
            <img src={isMale ? '/male-memoji.png' : '/female-memoji.png'} onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                setIsMale(!isMale)
            }} className='avatar' />
            <div>
                <ResEl tag="h1" className='name'>
                    {name}
                </ResEl>
                <ResEl tag="h3" className='profession'>
                    {profession}
                </ResEl>
            </div>
            <div className='contact'>
                {/* <div className='contact-item'>
                    <IoLocationSharp />
                    <ResEl className='address' tag='h6'>
                        {address}
                    </ResEl>
                </div> */}
                <div className='contact-item'>
                    <BsTelephoneFill />
                    <ResEl className='phone' tag='h6'>
                        {phone}
                    </ResEl>
                </div>
                <div className='contact-item'>
                    <MdEmail />
                    <ResEl className='email' tag='h6'>
                        {email}
                    </ResEl>
                </div>
                <div className='contact-item'>
                    <FaGlobe />
                    <ResEl className='website' tag='h6' >
                        {website}
                    </ResEl>
                </div>
            </div>
        </div>
    )
}

const MainLeftSection = () => {
    const { userData: { careerObjective, skills, education, interests, languages, hobbies } } = useSelector((state: RootState) => state.resume)

    return (
        <div className='main-left'>

            {
                careerObjective &&
                <>
                    <div className='heading-item'>
                        <FaAddressCard />
                        <ResEl tag='h3' className='block'>
                            CAREER OBJECTIVE
                        </ResEl>
                    </div>

                    <ResEl className='summary'>
                        {careerObjective}
                    </ResEl>
                    <ResEl className='block empty' />
                </>
            }



            <div className='heading-item'>
                <GiSkills />
                <ResEl tag='h3' className='block'>
                    SKILLS
                </ResEl>
            </div>

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
                    <div className='heading-item'>
                        <FaGraduationCap />
                        <ResEl tag='h3' className='block'>
                            EDUCATION
                        </ResEl>
                    </div>

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

            {interests &&
                <>
                    <div className='heading-item'>
                        <MdOutlineInterests />
                        <ResEl tag='h3' className='block'>
                            INTERESTS
                        </ResEl>
                    </div>

                    <ResEl className='block' tag='div'>
                        <ul >
                            {
                                interests.map((interest, index) => (
                                    <li key={index}>
                                        {interest}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                </>
            }

            {languages &&
                <>
                    <div className='heading-item'>
                        <IoLanguage />
                        <ResEl tag='h3' className='block'>
                            LANGUAGES
                        </ResEl>
                    </div>

                    <ResEl className='block' tag='div'>
                        <ul >
                            {
                                languages.map((language, index) => (
                                    <li key={index}>
                                        {language}
                                    </li>
                                ))
                            }
                        </ul>
                    </ResEl>
                </>
            }

            {hobbies &&
                <>
                    <div className='heading-item'>
                        <MdsRoundedInterests />
                        <ResEl tag='h3' className='block'>
                            HOBBIES
                        </ResEl>
                    </div>

                    <ResEl className='block' tag='div'>
                        <ul >
                            {
                                hobbies.map((hobby, index) => (
                                    <li key={index}>
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
const MainRightSection = () => {
    const { userData: { workExperience, projects, certifications, awardsAndHonors } } = useSelector((state: RootState) => state.resume)

    return (
        <div className='main-right'>

            <ResEl className='block empty' />
            {
                workExperience &&
                <>
                    <div className='heading-item'>
                        <MdWorkHistory />
                        <ResEl tag='h3' className='block'>
                            WORK EXPERIENCE
                        </ResEl>
                    </div>

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

            <>
                {
                    projects &&
                    <>
                        <div className='heading-item'>
                            <GrProjects />
                            <ResEl tag='h3' className='block'>
                                PROJECTS
                            </ResEl>
                        </div>

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
            </>


            {
                certifications &&
                <>
                    <div className='heading-item'>
                        <GrCertificate />
                        <ResEl tag='h3' className='block'>
                            CERTIFICATIONS
                        </ResEl>
                    </div>

                    {
                        certifications.map((cert, index) => (
                            <>
                                <ResEl tag='h4' className='block'>
                                    {cert.title}
                                </ResEl>
                                <ResEl className='block'>
                                    {cert.school}
                                </ResEl>
                                <ResEl className='block'>
                                    <small>{cert.date}</small>
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
                    <div className='heading-item'>
                        <FaAward />
                        <ResEl tag='h3' className='block'>
                            AWARDS AND HONORS
                        </ResEl>
                    </div>

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


const ClassicElegance = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)


    return (
        <ResumeContainer
            resumeRef={resumeRef} resClassName='classic-elegance'
            isSectioned={true}
            HeaderSection={HeaderSection}
            MainLeftSection={MainLeftSection}
            MainRightSection={MainRightSection}
            FooterSection={FooterSection}
            mainLayout={'col-30-70'}
        />
    )
}

export default ClassicElegance