import React, { useRef } from 'react'
import ResEl from '../../../components/ResEl'
import ResumeContainer from '../../../components/ResumeContainer'

const ClassicElegance = () => {
    const resumeRef = useRef<HTMLDivElement | null>(null)

    return (
        <ResumeContainer resumeRef={resumeRef}>
            <div className='resume' ref={resumeRef}>

                <ResEl className='header'>
                    Dave mark
                </ResEl>
                <ResEl className='address'>
                    Address
                </ResEl>
                <ResEl className='position' >
                    developer
                </ResEl>
                <ResEl>
                    hello
                </ResEl>
                <ResEl>
                    you
                </ResEl>

            </div>
        </ResumeContainer>
    )
}

export default ClassicElegance