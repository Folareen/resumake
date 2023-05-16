import React, { ReactNode } from 'react'
import ResEl from './ResEl'

type ResumeLayoutProps = {
    HeaderSection?: any,
    FooterSection?: any,
    MainLeftSection?: any,
    MainRightSection?: any,
    isSectioned: boolean,
    children?: ReactNode,
    resumeRef: HTMLDivElement | null,
    resClassName: string,
    mainLayout: string
}

const DefaultHeaderSection = () => (
    <div>
        <ResEl>
            header
        </ResEl>
    </div>
)
const DefaultMainRightSection = () => (
    <div>
        <ResEl>
            right
        </ResEl>
    </div>
)
const DefaultMainLeftSection = () => (
    <div>
        <ResEl>
            left
        </ResEl>
    </div>
)
const DefaultFooterSection = () => (
    <div>
        <ResEl>
            footer
        </ResEl>
    </div>
)


const ResumeLayout = ({ HeaderSection = DefaultHeaderSection, FooterSection = DefaultFooterSection, MainLeftSection = DefaultMainLeftSection, MainRightSection = DefaultMainRightSection, isSectioned, children, resumeRef, resClassName, mainLayout }: ResumeLayoutProps) => {
    return (
        <div ref={resumeRef} className={`${resClassName} resume ${isSectioned ? 'resume--sectioned' : 'resume--not-sectioned'} `}>
            {
                isSectioned ?
                    <>
                        <HeaderSection />
                        <div className={`main ${mainLayout}`}>
                            <MainLeftSection />
                            <MainRightSection />
                        </div>
                        <FooterSection />
                    </>
                    :
                    <>
                        {children}
                    </>

            }
        </div>
    )
}

export default ResumeLayout