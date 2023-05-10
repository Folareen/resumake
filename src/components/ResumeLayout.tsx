import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ResEl from './ResEl'
import ReactToPdf from 'react-to-pdf'
import Toolbar from './Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { editResume, previewResume } from '../redux/features/resumeSlice'

type ResumeLayoutProps = {
    children: ReactNode,
    resumeRef: HTMLDivElement | null,
    resClassName: string
}

const ResumeLayout = ({ children, resumeRef, resClassName }: ResumeLayoutProps) => {
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

            <div ref={resumeRef} className={`${resClassName} resume`}>
                {children}

            </div>

        </div>
    )
}

export default ResumeLayout