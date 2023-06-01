import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideToolbar, showToolbar } from '../redux/features/resumeSlice'
import { IoDuplicate, IoTrashBin } from 'react-icons/io5'
import { BsChevronCompactDown, BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactUp, BsJustify, BsJustifyLeft, BsJustifyRight, BsSubscript, BsSuperscript, BsTextIndentLeft } from 'react-icons/bs'
import { MdContentCopy, MdContentCut, MdContentPaste, MdFormatColorText, MdLinkOff, MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp, MdOutlineStrikethroughS, } from 'react-icons/md'
import { TbRowInsertBottom, TbRowInsertTop } from 'react-icons/tb'
import { CgInsertAfterR } from 'react-icons/cg'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { IoIosColorFill, IoMdLink } from 'react-icons/io'
import { RootState } from '../redux/store'
import { AiOutlineItalic, AiOutlineLine, AiOutlineOrderedList, AiOutlineUnderline, AiOutlineUnorderedList, AiOutlineVerticalAlignBottom, AiOutlineVerticalAlignTop } from 'react-icons/ai'
import { FaFont, FaIndent, FaOutdent, FaRedo, FaUndo } from 'react-icons/fa'
import { BiAlignJustify, BiFontSize } from 'react-icons/bi'
import ToolbarBtn from './ToolbarBtn'
import { HiOutlineArrowDownOnSquareStack } from 'react-icons/hi2'


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
        newEl.classList.add('line')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.previousSibling || currentEl);
        newEl.focus()
    }
    const insertLineDown = () => {
        const newEl = currentEl?.cloneNode(true) as HTMLElement
        newEl.innerText = ''
        newEl.classList.remove('inline')
        newEl.classList.add('line')
        newEl.addEventListener('click', showToolbarHandler)
        currentEl?.parentNode.insertBefore(newEl, currentEl?.nextSibling);
        newEl.focus()
    }


    return (
        <div className='toolbar'>
            {/* <ToolbarBtn
                tooltip="Hide toolbar"
                className="hide-toolbar"
                onClick={() => {
                    dispatch(hideToolbar());
                }}
            >
                X
            </ToolbarBtn> */}
            <ToolbarBtn
                tooltip="Underline"
                className="underline"
                onClick={() => {
                    document.execCommand('underline');
                }}
            >
                <AiOutlineUnderline />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Italic"
                className="italic"
                onClick={() => {
                    document.execCommand('italic');
                }}
            >
                <AiOutlineItalic />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Indent"
                className="indent"
                onClick={() => {
                    currentEl.style.display = 'block';
                    document.execCommand('indent');
                    currentEl.style.display = 'inline-block';
                }}
            >
                <FaIndent />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Outdent"
                className="outdent"
                onClick={() => {
                    currentEl.style.display = 'block';
                    document.execCommand('outdent');
                    currentEl.style.display = 'inline-block';
                }}
            >
                <FaOutdent />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Superscript"
                className="superscript"
                onClick={() => {
                    document.execCommand('superscript');
                }}
            >
                <BsSuperscript />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Subscript"
                className="subscript"
                onClick={() => {
                    document.execCommand('subscript');
                }}
            >
                <BsSubscript />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Strikethrough"
                className="strikethrough"
                onClick={() => {
                    document.execCommand('strikeThrough');
                }}
            >
                <MdOutlineStrikethroughS />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Align Right"
                className="align-right"
                onClick={() => {
                    currentEl?.classList.toggle('text-right');
                    currentEl?.classList.remove('text-left');
                    currentEl?.classList.remove('text-center');
                    currentEl?.classList.remove('text-justify');
                }}
            >
                <BsJustifyRight />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Align Left"
                className="align-left"
                onClick={() => {
                    currentEl?.classList.toggle('text-left');
                    currentEl?.classList.remove('text-right');
                    currentEl?.classList.remove('text-center');
                    currentEl?.classList.remove('text-justify');
                }}
            >
                <BsJustifyLeft />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Align Center"
                className="align-center"
                onClick={() => {
                    currentEl?.classList.toggle('text-center');
                    currentEl?.classList.remove('text-left');
                    currentEl?.classList.remove('text-right');
                    currentEl?.classList.remove('text-justify');
                }}
            >
                <BiAlignJustify />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Justify"
                className="justify"
                onClick={() => {
                    currentEl?.classList.toggle('text-justify');
                    currentEl?.classList.remove('text-left');
                    currentEl?.classList.remove('text-right');
                    currentEl?.classList.remove('text-center');
                }}
            >
                <BsJustify />
            </ToolbarBtn>
            {/* <ToolbarBtn
                tooltip="Font Size"
                className="font-size"
                onClick={() => {
                    document.execCommand('fontSize', false, '1');
                }}
            >
                <BiFontSize />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Font Name"
                className="font-name"
                onClick={() => {
                    document.execCommand('fontName', false, 'Serif');
                }}
            >
                <FaFont />
            </ToolbarBtn> */}
            <ToolbarBtn
                tooltip="Insert Horizontal Rule"
                className="insert-hr"
                onClick={() => {
                    document.execCommand('insertHorizontalRule');
                }}
            >
                <AiOutlineLine />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Insert Ordered List"
                className="insert-ol"
                onClick={() => {
                    currentEl.style.display = 'block';
                    document.execCommand('insertOrderedList', false, null);
                    currentEl.style.display = 'inline-block';
                }}
            >
                <AiOutlineOrderedList />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Insert Unordered List"
                className="insert-ul"
                onClick={() => {
                    currentEl.style.display = 'block';
                    document.execCommand('insertUnorderedList', false, null);
                    currentEl.style.display = 'inline-block';
                }}
            >
                <AiOutlineUnorderedList />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Copy"
                className="copy"
                onClick={() => {
                    document.execCommand('copy');
                }}
            >
                <MdContentCopy />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Cut"
                className="cut"
                onClick={() => {
                    document.execCommand('cut');
                }}
            >
                <MdContentCut />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Paste"
                className="paste"
                onClick={() => {
                    document.execCommand('paste');
                    navigator.clipboard
                        .readText()
                        .then((text) => {
                            currentEl.innerHTML = currentEl?.innerHTML + text;
                        })
                        .catch((err) => {
                            console.error('Failed to read clipboard contents: ', err);
                        });
                }}
            >
                <MdContentPaste />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Undo"
                className="undo"
                onClick={() => {
                    document.execCommand('undo');
                }}
            >
                <FaUndo />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Redo"
                className="redo"
                onClick={() => {
                    document.execCommand('redo');
                }}
            >
                <FaRedo />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Create Link"
                className="create-link"
                onClick={() => {
                    let link = prompt('Enter the link here:', 'https://');
                    if (!link) {
                        alert('Please enter a valid link');
                        return;
                    }
                    document.execCommand('createLink', false, link);
                }}
            >
                <IoMdLink />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Remove Link"
                className="remove-link"
                onClick={() => {
                    document.execCommand('unlink');
                }}
            >
                <MdLinkOff />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Text Color"
                className="text-color"
                onClick={() => { }}
            >
                <MdFormatColorText />
                <input
                    type="color"
                    onChange={(e) => {
                        document.execCommand('foreColor', false, e.target.value);
                    }}
                    style={{ position: 'absolute', width: '100%', height: '100%', cursor: 'pointer', top: 0, right: 0, left: 0, bottom: 0, opacity: 0 }}
                />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Background Color"
                className="background-color"
                onClick={() => { }}
            >
                <IoIosColorFill />
                <input
                    type="color"
                    onChange={(e) => {
                        document.execCommand('backColor', false, e.target.value);
                    }}
                    style={{ position: 'absolute', width: '100%', height: '100%', cursor: 'pointer', top: 0, right: 0, left: 0, bottom: 0, opacity: 0 }}
                />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Duplicate Down"
                className="duplicate-down"
                onClick={duplicateDown}
            >
                <HiOutlineArrowDownOnSquareStack />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Duplicate Up"
                className="duplicate-up"
                onClick={duplicateUp}
            >
                <HiOutlineArrowDownOnSquareStack />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Duplicate Right"
                className="duplicate-right"
                onClick={duplicateRight}
            >
                <HiOutlineArrowDownOnSquareStack />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Move Up"
                className="move-up"
                onClick={moveUp}
            >
                <MdOutlineKeyboardDoubleArrowUp />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Move Down"
                className="move-down"
                onClick={moveDown}
            >
                <MdOutlineKeyboardDoubleArrowDown />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Insert Row Above"
                className="insert-row-up"
                onClick={insertUp}
            >
                <TbRowInsertTop />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Insert Row Below"
                className="insert-row-down"
                onClick={insertDown}
            >
                <TbRowInsertBottom />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Insert Line Above"
                className="insert-line-up"
                onClick={insertLineUp}
            >
                <AiOutlineVerticalAlignTop />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Insert Line Below"
                className="insert-line-down"
                onClick={insertLineDown}
            >
                <AiOutlineVerticalAlignBottom />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Insert Inside"
                className="insert-inside"
                onClick={insertInside}
            >
                <CgInsertAfterR />
            </ToolbarBtn>
            <ToolbarBtn
                tooltip="Delete"
                className="delete"
                onClick={() => {
                    currentEl?.remove();
                }}
            >
                <IoTrashBin />
            </ToolbarBtn>
        </div>
    )
}

export default Toolbar