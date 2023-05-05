import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideToolbar, showToolbar } from '../redux/features/resumeSlice'
import { IoDuplicate, IoTrashBin } from 'react-icons/io5'
import { BsChevronCompactDown, BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactUp, BsSubscript, BsSuperscript } from 'react-icons/bs'
import { MdContentCopy, MdContentCut, MdContentPaste, MdLinkOff, MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp, MdOutlineStrikethroughS } from 'react-icons/md'
import { TbRowInsertBottom, TbRowInsertTop } from 'react-icons/tb'
import { CgInsertAfterR } from 'react-icons/cg'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { IoIosColorFill, IoMdLink } from 'react-icons/io'
import { RootState } from '../redux/store'
import { AiOutlineLine, AiOutlineOrderedList, AiOutlineVerticalAlignBottom, AiOutlineVerticalAlignTop } from 'react-icons/ai'
import { FaRedo, FaUndo } from 'react-icons/fa'
import { BiFontSize } from 'react-icons/bi'

// type ToolbarProps = {
//     refresh: boolean,
//     setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
// }

const Toolbar = () => {

    const dispatch = useDispatch()
    const { currentEl } = useSelector((state: RootState) => state.resume)

    const showToolbarHandler = (e: React.MouseEvent<HTMLElement>) => {
        console.log('showtoolbarr', e, e.currentTarget)
        dispatch(showToolbar(e.currentTarget))
    }

    const duplicateDown = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        console.log(newEl, 'newEl')
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
        currentEl?.parentNode.insertBefore(newEl, currentEl?.previousSibling || currentEl);
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
        currentEl?.parentNode.insertBefore(newEl, currentEl?.previousSibling || currentEl);
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
    const insertLineUp = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.innerText = ''
        newEl.classList.remove('inline')
        // newEl.classList.add('block')
        newEl.classList.add('line')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.previousSibling || currentEl);
        newEl.focus()
    }
    const insertLineDown = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.innerText = ''
        newEl.classList.remove('inline')
        // newEl.classList.add('block')
        newEl.classList.add('line')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.nextSibling);
        newEl.focus()
    }
    // const insertInside = () => {
    //     const newEl = currentEl?.cloneNode(true) as HTMLElement
    //     newEl.innerText = ''
    //     newEl.addEventListener('click', showToolbarHandler)
    //     currentEl.appendChild(newEl);
    //     newEl.focus()
    // }


    return (
        <div className='toolbar'>
            <button className='hide-toolbar' onClick={() => {
                dispatch(hideToolbar())
            }}>
                X
            </button>

            <button onClick={() => {
                document.execCommand('bold')
            }}>
                B
            </button>
            <button onClick={() => {
                document.execCommand('underline')
            }}>
                U
            </button>
            <button onClick={() => {
                document.execCommand('italic')
            }}>
                I
            </button>
            <button onClick={() => {
                document.execCommand('indent')
            }}>
                Id
            </button>
            <button onClick={() => {
                document.execCommand('outdent')
            }}>
                Ou
            </button>
            <button onClick={() => {
                document.execCommand('superscript')
            }}>
                <BsSuperscript />
            </button>
            <button onClick={() => {
                document.execCommand('subscript')
            }}>
                <BsSubscript />
            </button>
            <button onClick={() => {
                document.execCommand('strikeThrough')
            }}>
                <MdOutlineStrikethroughS />
            </button>
            <button onClick={() => {
                console.log('adjust font')
                document.execCommand('fontSize', false, '1')
                // smallest smaller small normal large larger largest
            }}>
                <BiFontSize />
            </button>
            <button onClick={() => {
                document.execCommand('insertHorizontalRule')
            }}>
                <AiOutlineLine />
            </button>
            {/* <button onClick={() => {
                // document.execCommand('indent', false, null)
                document.execCommand('insertOrderedList', false, null)
            }}>
                <AiOutlineOrderedList />
            </button> */}
            <button onClick={() => {
                document.execCommand('copy')
            }}>
                <MdContentCopy />
            </button>
            <button onClick={() => {
                document.execCommand('cut')
            }}>
                <MdContentCut />
            </button>
            <button onClick={() => {
                document.execCommand('paste')
                navigator.clipboard.readText()
                    .then(text => {
                        currentEl.innerHTML = currentEl?.innerHTML + text;
                    })
                    .catch(err => {
                        console.error('Failed to read clipboard contents: ', err);
                    });
            }}>
                <MdContentPaste />
            </button>
            <button onClick={() => {
                document.execCommand('undo')
            }}>
                <FaUndo />
            </button>
            <button onClick={() => {
                document.execCommand('redo')
            }}>
                <FaRedo />
            </button>
            <button onClick={() => {
                let link = prompt('Enter the link here: ', 'https://')
                console.log(link, 'link')
                if (!link) {
                    alert('Please enter a valid link')
                    return
                }
                document.execCommand('createLink', false, link)
            }}>
                <IoMdLink />
            </button>
            <button onClick={() => {
                document.execCommand('unLink')
            }}>
                <MdLinkOff />
            </button>
            <button className='btn' onClick={() => {
            }}>
                <IoColorPaletteSharp />
                <input type='color' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    document.execCommand('foreColor', false, e.target.value)
                }} />
            </button>
            <button className='btn' onClick={() => {
            }}>
                <IoIosColorFill />
                <input type='color' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    document.execCommand('backColor', false, e.target.value)
                }} />
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
            <button className='btn' onClick={insertLineUp}>
                <AiOutlineVerticalAlignTop />
            </button>
            <button className='btn' onClick={insertLineDown}>
                <AiOutlineVerticalAlignBottom />
            </button>
            {/* <button className='btn' onClick={insertInside}>
                            <CgInsertAfterR />
                        </button> */}
            <button className='btn' onClick={() => {
                currentEl?.remove()

            }}>
                <IoTrashBin />
            </button>
        </div>
    )
}

export default Toolbar