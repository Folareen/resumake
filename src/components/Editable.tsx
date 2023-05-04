import React from 'react'
import { useDispatch } from 'react-redux'
import { showToolbar } from '../redux/features/toolbarSlice'

type EditableProps = {
    children: React.ReactNode | string
}

const Editable = ({ children }: EditableProps) => {

    const dispatch = useDispatch()

    return (
        <p
            contentEditable
            className='editable inline' onSelect={(e: React.MouseEvent<HTMLElement>) => {
                console.log('showtoolbarr', e, e.currentTarget)
                dispatch(showToolbar(e.currentTarget))
            }}
        >
            {children}
        </p>
    )
}

export default Editable