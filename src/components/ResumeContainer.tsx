import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ResEl from './ResEl'
import ReactToPdf from 'react-to-pdf'
import Toolbar from './Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { changeZoomLevel, editResume, previewResume, saveResume } from '../redux/features/resumeSlice'
import ResumeLayout from './ResumeLayout'
import { toast } from 'react-toastify'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import html2canvas from 'html2canvas'
import SaveResumeModal from './modals/SaveResumeModal'

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
    addDivider: boolean,
}

const ResumeContainer = ({ HeaderSection, FooterSection, MainLeftSection, MainRightSection, isSectioned, children, resumeRef, resClassName, mainLayout, addDivider }: ResumeContainerProps) => {
    const { showToolbar, editMode, zoomLevel } = useSelector((state: RootState) => state.resume)

    const [blankSectionLayout, setBlankSectionLayout] = useState('')
    const [addSectionLayoutDivider, setAddSectionLayoutDivider] = useState(false)


    const dispatch = useDispatch()

    const [downloadingPdf, setDownloadingPdf] = useState(false)

    const { resumeID } = useParams()
    const { pathname } = useLocation()

    const [showSaveResModal, setShowSaveResModal] = useState(false)

    return (
        <>

            <SaveResumeModal modalVisible={showSaveResModal} setModalVisible={setShowSaveResModal} />

            <div className='resume-container' style={{ paddingBottom: pathname == '/templates' ? '0' : '40px' }}>
                {
                    !(Boolean(pathname == '/templates')) ?

                        <>

                            <div className='header-toolbar'>
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
                                {
                                    editMode ?
                                        (<>
                                            <button onClick={() => {
                                                dispatch(previewResume())
                                            }}>
                                                preview
                                            </button>
                                            {
                                                !resClassName ?
                                                    <>
                                                        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                            setBlankSectionLayout(e.target.value)
                                                        }} value={blankSectionLayout}>
                                                            {
                                                                ['', 'col-30-70', 'col-40-60', 'col-50-50', 'col-60-40', 'col-70-30'].map(
                                                                    (layout) => (
                                                                        <option value={layout}>
                                                                            {layout == '' ? 'none' : layout}
                                                                        </option>
                                                                    )
                                                                )
                                                            }
                                                        </select>
                                                        <button onClick={() => {
                                                            setAddSectionLayoutDivider(!addSectionLayoutDivider)
                                                        }}>
                                                            add section divider
                                                        </button>
                                                    </>
                                                    :
                                                    null
                                            }
                                        </>
                                        )
                                        :
                                        (
                                            <>
                                                <button onClick={() => {
                                                    setShowSaveResModal(true)
                                                }}>
                                                    Save online
                                                </button>
                                                <button onClick={() => {
                                                    dispatch(editResume())
                                                }}>
                                                    edit
                                                </button>

                                                <ReactToPdf filename={resumeID ? `${resumeID}.pdf` : `resume.pdf`} targetRef={resumeRef} options={{
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

                                                <button onClick={async () => {
                                                    const resumeEl = document.querySelector('.resume')
                                                    const canvas = await html2canvas(resumeEl as HTMLElement)
                                                    const data = canvas.toDataURL('image/jpg')
                                                    const link = document.createElement('a');

                                                    link.href = data;
                                                    link.download = resumeID ? `${resumeID}.jpg` : 'resume.jpg';

                                                    link.click();
                                                }}>
                                                    Download as Image
                                                </button>

                                            </>
                                        )
                                }
                            </div>


                            {
                                showToolbar && (
                                    <Toolbar />
                                )
                            }

                            {
                                resClassName ?
                                    <ResumeLayout resClassName={resClassName} HeaderSection={HeaderSection} FooterSection={FooterSection} MainLeftSection={MainLeftSection} MainRightSection={MainRightSection} isSectioned={isSectioned} resumeRef={resumeRef} mainLayout={mainLayout || ''} addDivider={addDivider}>
                                        {children}
                                    </ResumeLayout>
                                    :
                                    <ResumeLayout resClassName={resClassName} HeaderSection={HeaderSection} FooterSection={FooterSection} MainLeftSection={MainLeftSection} MainRightSection={MainRightSection} isSectioned={Boolean(blankSectionLayout)} resumeRef={resumeRef} mainLayout={blankSectionLayout} addDivider={addSectionLayoutDivider}>
                                        {children}
                                    </ResumeLayout>

                            }


                        </>
                        :
                        <ResumeLayout resClassName={resClassName} HeaderSection={HeaderSection} FooterSection={FooterSection} MainLeftSection={MainLeftSection} MainRightSection={MainRightSection} isSectioned={isSectioned} resumeRef={resumeRef} mainLayout={mainLayout || ''} addDivider={addDivider}>
                            {children}
                        </ResumeLayout>
                }
            </div>

        </>
    )
}

export default ResumeContainer