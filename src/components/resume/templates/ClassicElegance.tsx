import React, { useRef } from 'react'
import ResEl from '../../ResEl'
import ResumeLayout from '../ResumeLayout'

const ClassicElegance = () => {
    const resumeRef = useRef<HTMLDivElement | null>(null)

    return (
        <ResumeLayout resumeRef={resumeRef}>
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
        </ResumeLayout>
    )
}

export default ClassicElegance