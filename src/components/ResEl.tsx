import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showToolbar } from '../redux/features/resumeSlice'
import { RootState } from '../redux/store'

type ResElProps = {
    children: React.ReactNode | string,
    className?: string
}

const ResEl = ({ children, className }: ResElProps) => {

    const dispatch = useDispatch()
    const { editMode } = useSelector((state: RootState) => state.resume)

    return (
        <p
            contentEditable={editMode}
            onKeyDown={(e) => {
                if (!e.currentTarget?.children) {
                    if (e.currentTarget.innerText === '') {
                        e.currentTarget.classList.add('empty')
                    }
                    else {
                        e.currentTarget.classList.remove('empty')
                    }
                    return
                }
                const children = [...e.currentTarget.children]
                children.forEach(element => {
                    if (element.innerText === '') {
                        element.classList.add('empty')
                    }
                    else {
                        element.classList.remove('empty')
                    }
                });
                if (e.currentTarget.innerText.length > 0) {
                    e.currentTarget.classList.remove('empty')
                }
            }}
            className={`resume-element inline ${editMode && 'editable'} ${className}`}
            onSelect={(e: React.MouseEvent<HTMLElement>) => {
                if (editMode) {
                    dispatch(showToolbar(e.currentTarget))
                }
            }}
        >
            {children}
        </p>
    )
}

export default ResEl