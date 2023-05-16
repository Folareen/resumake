import React, { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showToolbar } from '../redux/features/resumeSlice'
import { RootState } from '../redux/store'

type ResElProps = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div',
    children?: React.ReactNode | string,
    className?: string,
}

const ResEl = ({ tag: Tag = 'p', children, className = '' }: ResElProps) => {
    const dispatch = useDispatch()
    const { editMode } = useSelector((state: RootState) => state.resume)

    return (
        <Tag
            contentEditable={editMode}
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
                if (!e.currentTarget?.children) {
                    if (e.currentTarget.innerText === '') {
                        e.currentTarget.classList.add('empty')
                    } else {
                        e.currentTarget.classList.remove('empty')
                    }
                    return
                }
                const children: any[] = [...e.currentTarget.children]
                children.forEach((element) => {
                    if (element.innerText === '') {
                        element.classList.add('empty')
                    } else {
                        element.classList.remove('empty')
                    }
                })
                if (e.currentTarget.innerText.length > 0) {
                    e.currentTarget.classList.remove('empty')
                }
            }}
            className={`resume-element inline ${editMode && 'editable'} ${className}`}
            onSelect={(e: React.SyntheticEvent<HTMLElement, Event>) => {
                if (editMode) {
                    dispatch(showToolbar(e.currentTarget))
                }
            }}
        >
            {children}
        </Tag>
    )
}

export default ResEl
