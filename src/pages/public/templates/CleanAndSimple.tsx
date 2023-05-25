import React, { useRef } from 'react'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'

const CleanAndSimple = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)

    return (
        <ResumeContainer resumeRef={resumeRef} resClassName='clean-and-simple' isSectioned={false}>

            <ResEl tag="h1" className='name'>
                JENNIFER DAVIS
            </ResEl>
            <ResEl tag='h3' className='profession'>
                Project Manager
            </ResEl>
            <ResEl className='address'>
                CITY OF HOUSTON, TX 77002
            </ResEl>

            <ResEl className='phone-email'>
                (555) 555-5555 |  JENNIFER.DAVIS@EMAIL.COM
            </ResEl>


            <ResEl />
            <ResEl className='line' />
            <ResEl className='summary'>
                Resourceful Project Manager skilled in leading cross-functional teams and delivering projects on time and within budget. Proficient in project planning and execution, risk management, and stakeholder communication. Strong communication and problem-solving skills.
            </ResEl>
            <ResEl className='line' tag='div' />

            <ResEl className='block' />
            <ResEl tag='h2' className='block'>
                EXPERIENCE
            </ResEl>

            <ResEl tag='h3' className='block' >
                ABC Corporation
            </ResEl>
            <ResEl tag='h4' className='block'>
                Project Manager // Houston, TX // July 2017 to Current
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

            <ResEl tag='h3' className='block'>
                XYZ Company
            </ResEl>
            <ResEl tag='h4' className='block'>
                Project Coordinator // Houston, TX // June 2015 to July 2017
            </ResEl>
            <ResEl className='second-experience block'>
                <ul>
                    <li>
                        Assisted project managers in project planning and execution activities, including budget development, resource allocation, risk management, and stakeholder communication.
                    </li>
                    <li>Managed project documentation and communications to ensure accurate and timely delivery of project updates and deliverables.
                    </li>
                    <li>Assisted in the implementation of project management touls and processes, resulting in a 15% reduction in project cycle time.
                    </li>
                </ul>
            </ResEl>

            <ResEl tag='h3' className='block'>
                Acme Inc.
            </ResEl>
            <ResEl tag='h4' className='block'>
                Project Coordinator // Austin, TX // September 2018 to October 2020
            </ResEl>
            <ResEl className='block third-experience'>
                <ul>
                    <li>
                        Collaborated with project managers to develop project plans, schedules, and budgets while ensuring timely delivery of project updates and deliverables.
                    </li>
                    <li>Monitored project progress, identified potential risks, and implemented mitigation strategies to prevent delays and ensure successful project completion.
                    </li>
                    <li>Streamlined project management processes and introduced new project management touls, resulting in a 20% increase in overall project efficiency.
                    </li>
                </ul>
            </ResEl>


            <ResEl className='block' />
            <ResEl tag='h2' className='block'>
                SKILLS
            </ResEl>
            <ResEl>
                <ul>
                    <li>
                        Product development
                    </li>
                    <li>Market research and analysis

                    </li>
                    <li>Customer needs assessment

                    </li>
                </ul>
            </ResEl>
            <ResEl>
                <ul>
                    <li>
                        Cross-functional team leadership
                    </li>
                    <li>Product roadmap planning
                    </li>
                    <li>Agile development methodulogy

                    </li>
                </ul>
            </ResEl>


            <ResEl className='block' />
            <ResEl tag='h2' className='block'>
                EDUCATION
            </ResEl>
            <ResEl tag='h4' className='block'>
                Master of Business Administration - Product Management
            </ResEl>
            <ResEl className='block'>
                University of California // Berkeley, CA
            </ResEl>

            <ResEl tag='h6' className='empty block' />

            <ResEl tag='h4' className='block'>
                Bachelor of Science - Marketing
            </ResEl>
            <ResEl className='block'>
                San Diego State University // San Diego, CA
            </ResEl>

        </ResumeContainer>
    )
}

export default CleanAndSimple