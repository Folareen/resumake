import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { RootState } from '../redux/store'
import ResEl from './ResEl'

type ResumeLayoutProps = {
    HeaderSection?: any,
    FooterSection?: any,
    MainLeftSection?: any,
    MainRightSection?: any,
    isSectioned: boolean,
    children?: ReactNode,
    resumeRef: React.MutableRefObject<HTMLDivElement> | null,
    resClassName: string,
    mainLayout: string,
    addDivider: boolean
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


const ResumeLayout = ({ HeaderSection = DefaultHeaderSection, FooterSection = DefaultFooterSection, MainLeftSection = DefaultMainLeftSection, MainRightSection = DefaultMainRightSection, isSectioned, children, resumeRef, resClassName, mainLayout, addDivider }: ResumeLayoutProps) => {
    const { zoomLevel } = useSelector((state: RootState) => state.resume)

    const { pathname } = useLocation()

    return (
        <div className='resume-wrapper'>
            <div ref={resumeRef} className={`${resClassName} resume  ${pathname == '/templates' ? 'display-as-template-card' : zoomLevel.split(' ').join('-')} ${isSectioned ? 'resume--sectioned' : 'resume--not-sectioned'} `}>
                {
                    isSectioned ?
                        <>
                            <HeaderSection />
                            <div className={`main ${mainLayout}`}>
                                <MainLeftSection />
                                {
                                    addDivider ?
                                        <div className="main__divider">

                                        </div>
                                        :
                                        null
                                }

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
        </div>
    )
}

export default ResumeLayout