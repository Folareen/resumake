import React, { useRef } from 'react'
import ResEl from '../../components/ResEl'
import ResumeContainer from '../../components/ResumeContainer'

const Blank = () => {
    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)

    return (
        <ResumeContainer resumeRef={resumeRef}>
            <div className='resume' ref={resumeRef}>

                <ResEl className='header'>

                </ResEl>

            </div>
        </ResumeContainer>
    )
}

export default Blank