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