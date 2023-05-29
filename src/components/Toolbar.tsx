import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideToolbar, showToolbar } from '../redux/features/resumeSlice'
import { IoDuplicate, IoTrashBin } from 'react-icons/io5'
import { BsChevronCompactDown, BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactUp, BsJustify, BsJustifyLeft, BsJustifyRight, BsSubscript, BsSuperscript } from 'react-icons/bs'
import { MdContentCopy, MdContentCut, MdContentPaste, MdLinkOff, MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp, MdOutlineStrikethroughS } from 'react-icons/md'
import { TbRowInsertBottom, TbRowInsertTop } from 'react-icons/tb'
import { CgInsertAfterR } from 'react-icons/cg'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { IoIosColorFill, IoMdLink } from 'react-icons/io'
import { RootState } from '../redux/store'
import { AiOutlineLine, AiOutlineOrderedList, AiOutlineUnorderedList, AiOutlineVerticalAlignBottom, AiOutlineVerticalAlignTop } from 'react-icons/ai'
import { FaFont, FaRedo, FaUndo } from 'react-icons/fa'
import { BiAlignJustify, BiFontSize } from 'react-icons/bi'


const Toolbar = () => {

    const dispatch = useDispatch()
    const { currentEl } = useSelector((state: RootState) => state.resume)

    const showToolbarHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.currentTarget.classList.contains('editable')) {
            dispatch(showToolbar(e.currentTarget))
        }
    }

    const duplicateDown = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.addEventListener('click', showToolbarHandler)
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
    const insertInside = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.innerText = ''
        newEl.classList.remove('inline')
        newEl.classList.add('block')
        newEl.classList.add('empty')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl.appendChild(newEl);
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
                currentEl.style.display = 'block'
                document.execCommand('indent')
                currentEl.style.display = 'inline-block'
            }}>
                Id
            </button>
            <button onClick={() => {
                currentEl.style.display = 'block'
                document.execCommand('outdent')
                currentEl.style.display = 'inline-block'
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
                currentEl?.classList.toggle('text-right')
                currentEl?.classList.remove('text-left')
                currentEl?.classList.remove('text-center')
                currentEl?.classList.remove('text-justify')
            }}>
                <BsJustifyRight />
            </button>
            <button onClick={() => {
                currentEl?.classList.toggle('text-left')
                currentEl?.classList.remove('text-right')
                currentEl?.classList.remove('text-center')
                currentEl?.classList.remove('text-justify')
            }}>
                <BsJustifyLeft />
            </button>
            <button onClick={() => {
                currentEl?.classList.toggle('text-center')
                currentEl?.classList.remove('text-left')
                currentEl?.classList.remove('text-right')
                currentEl?.classList.remove('text-justify')
            }}>
                <BiAlignJustify />
            </button>
            <button onClick={() => {
                currentEl?.classList.toggle('text-justify')
                currentEl?.classList.remove('text-left')
                currentEl?.classList.remove('text-right')
                currentEl?.classList.remove('text-center')
            }}>
                <BsJustify />
            </button>
            <button onClick={() => {
                document.execCommand('fontSize', false, '1')
                // smallest smaller small normal large larger largest
            }}>
                <BiFontSize />
            </button>
            <button onClick={() => {
                document.execCommand('fontName', false, 'Serif')
                // select from list of fonts....
            }}>
                <FaFont />
            </button>
            <button onClick={() => {
                document.execCommand('insertHorizontalRule')
            }}>
                <AiOutlineLine />
            </button>
            <button onClick={() => {
                currentEl.style.display = 'block'
                document.execCommand('insertOrderedList', false, null)
                currentEl.style.display = 'inline-block'
            }}>
                <AiOutlineOrderedList />
            </button>
            <button onClick={() => {
                currentEl.style.display = 'block'
                document.execCommand('insertUnorderedList', false, null)
                currentEl.style.display = 'inline-block'
            }}>
                <AiOutlineUnorderedList />
            </button>
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
            <button className='btn' onClick={insertInside}>
                <CgInsertAfterR />
            </button>
            <button className='btn' onClick={() => {
                currentEl?.remove()

            }}>
                <IoTrashBin />
            </button>
        </div>
    )
}

export default Toolbar