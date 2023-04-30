import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Editable from '../../components/Editable'
import ReactToPdf from 'react-to-pdf'
import { IoDuplicate } from 'react-icons/io5'
import { BsChevronCompactDown, BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactUp } from 'react-icons/bs'
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'
import { TbRowInsertBottom, TbRowInsertTop } from 'react-icons/tb'

const Blank = () => {
    const [refresh, setRefresh] = useState<boolean>(false)
    const [showToolbar, setShowToolbar] = useState<boolean>(false)
    const [currentEl, setCurrentEl] = useState<HTMLElement | null>(null)

    const showToolbarHandler = (e: React.MouseEvent<HTMLElement>) => {
        console.log('showtoolbarr', e, e.currentTarget)
        setCurrentEl(e.currentTarget as HTMLElement)
        setShowToolbar(true)
    }

    const duplicateDown = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        console.log(newEl)
        // const newElement = document.createElement('p')
        // newElement.innerHTML = newEl.innerHTML
        // newElement.setAttribute('contenteditable', 'true')
        // newElement.setAttribute('class', 'editable')
        // newElement.setAttribute('id', `editable-container-${(new Date()).getTime()}`)
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.addEventListener('click', showToolbarHandler)
        // newElement.addEventListener('select', () => console.log('selectt'))
        // newEl?.children[1]?.addEventListener('select', showToolbarHandler)
        // newEl?.addEventListener('click', () => { console.log('hiii') })
        console.log(currentEl, 'currEl')
        console.log(currentEl?.parentNode, 'currElParent')
        // currentEl?.insertAdjacentHTML("afterend", newElement?.outerHTML);

        currentEl?.parentNode.insertBefore(newEl, currentEl?.nextSibling);

    }
    const duplicateUp = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.previousSibling);
    }
    const duplicateRight = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.nextSibling);
    }
    const moveUp = () => {
        const newEl = currentEl as HTMLElement
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.previousSibling);
    }
    const moveDown = () => {
        console.log('move down')
        const newEl = currentEl as HTMLElement
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode?.insertBefore(newEl, currentEl?.nextSibling);
    }
    const insertUp = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.innerText = ''
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.previousSibling);
        newEl.focus()
    }
    const insertDown = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.innerText = ''
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.nextSibling);
        newEl.focus()
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
                        <button onClick={() => {
                            document.execCommand('indent')
                            setRefresh(!refresh)
                        }}>
                            Id
                        </button>
                        <button onClick={() => {
                            document.execCommand('outdent')
                            setRefresh(!refresh)
                        }}>
                            Ou
                        </button>
                        <button style={{ display: 'flex', flexDirection: 'column' }} className='btn' onClick={duplicateDown}>
                            <IoDuplicate />
                            <BsChevronCompactDown />
                        </button>
                        <button style={{ display: 'flex', flexDirection: 'column' }} className='btn' onClick={duplicateUp}>
                            <BsChevronCompactUp />
                            <IoDuplicate />
                        </button>
                        <button style={{ display: 'flex', flexDirection: 'row' }} className='btn' onClick={duplicateRight}>
                            <BsChevronCompactRight />
                            <IoDuplicate />
                        </button>
                        <button className='btn' onClick={moveUp}>
                            <MdOutlineKeyboardDoubleArrowUp />
                        </button>
                        <button className='btn' onClick={moveDown}>
                            <MdOutlineKeyboardDoubleArrowDown />
                        </button>
                        <button className='btn' onClick={insertUp}>
                            <TbRowInsertTop />
                        </button>
                        <button className='btn' onClick={insertDown}>
                            <TbRowInsertBottom />
                        </button>
                        <button className='btn' onClick={() => {
                            currentEl?.remove()

                        }}>
                            x
                        </button>
                    </div>
                )
            }

            <div className='resume' ref={bodyRef}>

                <Editable onSelect={showToolbarHandler}>
                    Dave mark
                </Editable>
                <Editable onSelect={showToolbarHandler}>
                    Address
                </Editable>
                <Editable onSelect={showToolbarHandler}>
                    loremm
                </Editable>
                <Editable onSelect={showToolbarHandler}>
                    hello
                </Editable>
                <Editable onSelect={showToolbarHandler}>
                    you
                </Editable>

            </div>




        </div>
    )
}

export default Blank