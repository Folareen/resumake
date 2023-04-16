import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Editable from '../../components/Editable'
import ReactToPdf from 'react-to-pdf'

const Blank = () => {
    const [refresh, setRefresh] = useState<boolean>(false)
    const [showToolbar, setShowToolbar] = useState<boolean>(false)

    useEffect(() => {
        console.log(document.querySelector('.name')?.innerHTML)
    }, [refresh])

    const showToolbarHandler = () => {
        setShowToolbar(true)
    }

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
                            bodyRef.current.style.transform = 'scale(1)'
                            toPdf()
                        }}>
                            Download as Pdf
                        </button>
                    )
                }
            </ReactToPdf>

            {
                showToolbar && (
                    <div className='toolbar'>
                        <button onClick={() => {
                            document.execCommand('bold')
                            setRefresh(!refresh)
                        }}>
                            B
                        </button>
                        <button onClick={() => {
                            document.execCommand('underline')
                            setRefresh(!refresh)
                        }}>
                            U
                        </button>
                        <button onClick={() => {
                            document.execCommand('italic')
                            setRefresh(!refresh)
                        }}>
                            I
                        </button>
                    </div>
                )
            }

            <div className='resume' ref={bodyRef}>

                <Editable onSelect={showToolbarHandler}>
                    Name
                </Editable>
                <Editable onSelect={showToolbarHandler}>
                    Address
                </Editable>

            </div>




        </div>
    )
}

export default Blank