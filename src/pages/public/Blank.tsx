import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Editable from '../../components/Editable'
import ReactToPdf from 'react-to-pdf'
import Toolbar from '../../components/Toolbar'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Blank = () => {
    const { show } = useSelector((state: RootState) => state.toolbar)

    const bodyRef = useRef<HTMLDivElement>(null)

    return (
        <div>

            {/* 
            elements insertable
            line
            section
            shape
            */}

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

            {
                show && (
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