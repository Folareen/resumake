import React, { useEffect, useState } from 'react'
import Editable from '../../components/Editable'

const Blank = () => {
    const [refresh, setRefresh] = useState<boolean>(false)
    const [showToolbar, setShowToolbar] = useState<boolean>(false)

    useEffect(() => {
        console.log(document.querySelector('.name')?.innerHTML)
    }, [refresh])

    const showToolbarHandler = () => {
        setShowToolbar(true)
    }


    return (
        <div>

            {/* 
            elements insertable
            line
            section
            shape
            */}

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


            <div className='resume'>

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