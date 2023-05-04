import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Editable from '../../components/Editable'
import ReactToPdf from 'react-to-pdf'
import Toolbar from '../../components/Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { editResume, previewResume } from '../../redux/features/resumeSlice'

const Blank = () => {
    const { showToolbar, editMode } = useSelector((state: RootState) => state.resume)

    const bodyRef = useRef<HTMLDivElement>(null)

    const dispatch = useDispatch()

    return (
        <div>

            {/* 
            elements insertable
            line
            section
            shape
            */}

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

                        <ReactToPdf filename={`test.pdf`} targetRef={bodyRef} options={{
                            // format: [bodyRef?.current?.clientWidth, bodyRef?.current?.clientHeight],
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

            <div className='resume' ref={bodyRef}>

                <Editable>
                    Dave mark
                </Editable>
                <Editable >
                    Address
                </Editable>
                <Editable >
                    loremm
                </Editable>
                <Editable>
                    hello
                </Editable>
                <Editable>
                    you
                </Editable>

            </div>




        </div>
    )
}

export default Blank