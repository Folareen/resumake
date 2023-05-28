import React, { useRef } from 'react'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'

const HeaderSection = () => (
    <div className='header'>
        <ResEl tag="h1" className='name'>
            JENNIFER DAVIS
        </ResEl>
        <ResEl tag="h3" className='profession'>
            Project Manager
        </ResEl>
    </div>
)
const MainRightSection = () => (
    <div className='main-right'>

        <ResEl className='block empty' />
        <ResEl tag='h3' className='block'>
            CONTACT
        </ResEl>

        <ResEl className='address' tag='h6'>
            CITY OF HOUSTON, TX 77002
        </ResEl>
        <ResEl className='phone' tag='h6'>
            (555) 555-5555 |
        </ResEl>
        <ResEl className='email' tag='h6'>
            JENNIFER.DAVIS@EMAIL.COM
        </ResEl>
        <ResEl className='website' tag='h6'>
            jenifferdavis.com
        </ResEl>

        <ResEl className='block empty' />
        <ResEl tag='h3' className='block'>
            SKILLS
        </ResEl>

        <ResEl className='block'>
            <ul >
                <li>Product development
                </li>
                <li>Market research and analysis
                </li>
                <li>Customer needs assessment
                </li>
                <li> Cross-functional team leadership
                </li>
                <li>Product roadmap planning
                </li>
                <li>Agile development methodulogy
                </li>
                <li>Customer needs assessment
                </li>
            </ul>
        </ResEl>

        <ResEl className='block empty' />
        <ResEl tag='h3' className='block'>
            EDUCATION
        </ResEl>

        <ResEl tag='h4' className='block'>
            Master of Business Administration -
        </ResEl>
        <ResEl className='block'>
            <b>Product Management</b>
        </ResEl>
        <ResEl className='block'>
            University of California, Berkeley, CA
        </ResEl>

        <ResEl tag='h6' className='empty block' />

        <ResEl tag='h4' className='block'>
            Bachelor of Science
        </ResEl>
        <ResEl className='block'>
            <b>Marketing</b>
        </ResEl>
        <ResEl className='block'>
            San Diego State University, San Diego, CA
        </ResEl>




    </div>
)
const MainLeftSection = () => (
    <div className='main-left'>
        <ResEl tag='h3' className='block'>
            CAREER OBJECTIVE
        </ResEl>
        <ResEl className='summary'>
            Resourceful Project Manager skilled in leading cross-functional teams and delivering projects on time and within budget. Proficient in project planning and execution, risk management, and stakeholder communication. Strong communication and problem-solving skills.
        </ResEl>

        <ResEl className='block empty' />
        <ResEl tag='h3' className='block'>
            WORK EXPERIENCE
        </ResEl>

        <ResEl tag='h4' className='block'>
            Project Manager
        </ResEl>
        <ResEl tag='h5' className='block' >
            ABC Corporation, Houston, TX. * July 2017 to Current
        </ResEl>
        <ResEl className='first-experience block'>
            <ul >
                <li>
                    Lead project planning and execution activities, including budget development, resource allocation, risk management, and stakeholder communication.
                </li>
                <li>Collaborate with cross-functional teams to deliver projects on time and within budget, resulting in a 20% increase in customer satisfaction ratings.
                </li>
                <li> Optimize project management processes and touls, resulting in a 25% reduction in project cycle time.
                </li>
            </ul>
        </ResEl>

        <ResEl className='block empty' />
        <ResEl tag='h4' className='block'>
            Project Manager
        </ResEl>
        <ResEl tag='h5' className='block' >
            ABC Corporation, Houston, TX. * July 2017 to Current
        </ResEl>
        <ResEl className='first-experience block'>
            <ul >
                <li>
                    Lead project planning and execution activities, including budget development, resource allocation, risk management, and stakeholder communication.
                </li>
                <li>Collaborate with cross-functional teams to deliver projects on time and within budget, resulting in a 20% increase in customer satisfaction ratings.
                </li>
                <li> Optimize project management processes and touls, resulting in a 25% reduction in project cycle time.
                </li>
            </ul>
        </ResEl>

        <ResEl className='block empty' />
        <ResEl tag='h4' className='block'>
            Project Manager
        </ResEl>
        <ResEl tag='h5' className='block' >
            ABC Corporation, Houston, TX. * July 2017 to Current
        </ResEl>
        <ResEl className='first-experience block'>
            <ul >
                <li>
                    Lead project planning and execution activities, including budget development, resource allocation, risk management, and stakeholder communication.
                </li>
                <li>Collaborate with cross-functional teams to deliver projects on time and within budget, resulting in a 20% increase in customer satisfaction ratings.
                </li>
                <li> Optimize project management processes and touls, resulting in a 25% reduction in project cycle time.
                </li>
            </ul>
        </ResEl>


        <ResEl className='block empty' />
        <ResEl tag='h3' className='block'>
            PROJECTS
        </ResEl>

        <ResEl tag='h5' className='block'>
            Project Manager // Houston, TX // July 2017 to Current
        </ResEl>
        <ResEl tag='h4' className='block' >
            ABC Corporation
        </ResEl>
        <ResEl className='first-experience block'>
            <ul >
                <li>
                    Lead project planning and execution activities, including budget development, resource allocation, risk management, and stakeholder communication.
                </li>
                <li>Collaborate with cross-functional teams to deliver projects on time and within budget, resulting in a 20% increase in customer satisfaction ratings.
                </li>
                <li> Optimize project management processes and touls, resulting in a 25% reduction in project cycle time.
                </li>
            </ul>
        </ResEl>

    </div>
)
const FooterSection = () => (
    <div>
    </div>
)


const ProfessionalEdge = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)


    return (
        <ResumeContainer
            resumeRef={resumeRef} resClassName='professional-edge'
            isSectioned={true}
            HeaderSection={HeaderSection}
            MainLeftSection={MainLeftSection}
            MainRightSection={MainRightSection}
            FooterSection={FooterSection}
            mainLayout={'col-70-30'}
        />
    )
}

export default ProfessionalEdge