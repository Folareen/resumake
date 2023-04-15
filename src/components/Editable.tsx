import React from 'react'

type EditableProps = {
    children: React.ReactNode | string
    onSelect: () => void
}

const Editable = ({ children, onSelect }: EditableProps) => {
    return (
        <p contentEditable className='editable' onSelect={onSelect}>{children}</p>
    )
}

export default Editable