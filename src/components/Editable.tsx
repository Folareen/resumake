import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showToolbar } from '../redux/features/resumeSlice'
import { RootState } from '../redux/store'

type EditableProps = {
    children: React.ReactNode | string
}

const Editable = ({ children }: EditableProps) => {

    const dispatch = useDispatch()
    const { editMode } = useSelector((state: RootState) => state.resume)

    return (
        <p
            contentEditable={editMode}
            className={`editable inline ${editMode && 'resizable'}`}
            onSelect={(e: React.MouseEvent<HTMLElement>) => {
                console.log('showtoolbarr', e, e.currentTarget)
                if (editMode) {
                    dispatch(showToolbar(e.currentTarget))
                }
            }}
        >
            {children}
        </p>
    )
}

export default Editable