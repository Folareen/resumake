import React, { useRef } from 'react'
import ResEl from '../../components/ResEl'
import ResumeLayout from '../../components/resume/ResumeLayout'

const Blank = () => {
    const resumeRef = useRef<HTMLDivElement | null>(null)

    return (
        <ResumeLayout resumeRef={resumeRef}>
            <div className='resume' ref={resumeRef}>

                <ResEl className='header'>
                    
                </ResEl>

            </div>
        </ResumeLayout>
    )
}

export default Blank