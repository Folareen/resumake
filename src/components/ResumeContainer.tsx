import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ResEl from './ResEl'
import ReactToPdf from 'react-to-pdf'
import Toolbar from './Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { editResume, previewResume } from '../redux/features/resumeSlice'
import ResumeLayout from './ResumeLayout'

type ResumeContainerProps = {
    HeaderSection?: any,
    FooterSection?: any,
    MainLeftSection?: any,
    MainRightSection?: any,
    isSectioned: boolean,
    children?: ReactNode,
    resumeRef: HTMLDivElement | null,
    resClassName: string
}

const ResumeContainer = ({ HeaderSection, FooterSection, MainLeftSection, MainRightSection, isSectioned, children, resumeRef, resClassName }: ResumeContainerProps) => {
    const { showToolbar, editMode } = useSelector((state: RootState) => state.resume)

    const dispatch = useDispatch()

    return (
        <div>

            {
                editMode ?
                    (<div>
                        <button onClick={() => {
                            dispatch(previewResume())
                        }}>
                            preview
                        </button>
                        <button onClick={() => {
                            dispatch(editResume())
                        }}>
                            save
                        </button>
                    </div>)
                    :
                    (<div>
                        <button onClick={() => {
                            dispatch(editResume())
                        }}>
                            edit
                        </button>

                        <ReactToPdf filename={`resume.pdf`} targetRef={resumeRef} options={{
                            // format: [resumeRef?.current?.clientWidth, resumeRef?.current?.clientHeight],
                            unit: 'px',
                        }} scale={1}>
                            {
                                ({ toPdf }: { toPdf: () => void }) => (
                                    <button onClick={() => {
                                        toPdf()
                                    }}>
                                        Download as Pdf
                                    </button>
                                )
                            }
                        </ReactToPdf>
                        <button>
                            Download as Image
                        </button>

                    </div>)
            }


            {
                showToolbar && (
                    <Toolbar />
                )
            }

            <ResumeLayout resClassName={resClassName} HeaderSection={HeaderSection} FooterSection={FooterSection} MainLeftSection={MainLeftSection} MainRightSection={MainRightSection} isSectioned={isSectioned} resumeRef={resumeRef}>
                {children}
            </ResumeLayout>

        </div>
    )
}

export default ResumeContainer