import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ResEl from './ResEl'
import ReactToPdf from 'react-to-pdf'
import Toolbar from './Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { changeZoomLevel, editResume, previewResume } from '../redux/features/resumeSlice'
import ResumeLayout from './ResumeLayout'
import { toast } from 'react-toastify'

type ResumeContainerProps = {
    HeaderSection?: any,
    FooterSection?: any,
    MainLeftSection?: any,
    MainRightSection?: any,
    isSectioned: boolean,
    children?: ReactNode,
    resumeRef: React.MutableRefObject<HTMLDivElement> | null,
    resClassName: string,
    mainLayout?: string,
    addDivider: boolean
}

const ResumeContainer = ({ HeaderSection, FooterSection, MainLeftSection, MainRightSection, isSectioned, children, resumeRef, resClassName, mainLayout, addDivider }: ResumeContainerProps) => {
    const { showToolbar, editMode, zoomLevel } = useSelector((state: RootState) => state.resume)

    const dispatch = useDispatch()

    const [downloadingPdf, setDownloadingPdf] = useState(false)

    return (
        <div>

            <div>
                <select onChange={(e) => {
                    dispatch(changeZoomLevel(e.target.value))
                }} value={zoomLevel}>
                    {
                        ['zoom 40', 'zoom 60', 'zoom 80', 'zoom 100'].map(
                            (zoomLevel) => (
                                <option value={zoomLevel}>
                                    {zoomLevel}%
                                </option>
                            )
                        )
                    }
                </select>

            </div>
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
                                    <button onClick={async () => {
                                        try {
                                            setDownloadingPdf(true)
                                            const formerZoomLevel = zoomLevel.split(' ').join('-')
                                            resumeRef?.current.classList.remove(formerZoomLevel)
                                            resumeRef?.current.classList.add('zoom-100')
                                            await toPdf()
                                            resumeRef?.current.classList.remove('zoom-100')
                                            resumeRef?.current.classList.add(formerZoomLevel)
                                        } catch (error) {
                                            toast.error('Unable to download resume.\n Please try again.')
                                        } finally {
                                            setDownloadingPdf(false)
                                        }
                                    }}>
                                        {
                                            downloadingPdf ?
                                                'Please wait...'
                                                :
                                                'Download as Pdf'
                                        }
                                    </button>
                                )
                            }
                        </ReactToPdf>

                        <button>
                            Download as Image
                        </button>

                    </div>
                    )
            }


            {
                showToolbar && (
                    <Toolbar />
                )
            }

            <ResumeLayout resClassName={resClassName} HeaderSection={HeaderSection} FooterSection={FooterSection} MainLeftSection={MainLeftSection} MainRightSection={MainRightSection} isSectioned={isSectioned} resumeRef={resumeRef} mainLayout={mainLayout || ''} addDivider={addDivider}>
                {children}
            </ResumeLayout>

        </div>
    )
}

export default ResumeContainer