import React, { useState } from 'react'

type ToolbarBtnProps = {
    className: string,
    onClick: () => void,
    children: React.ReactNode | string,
    tooltip: string
}

const ToolbarBtn = ({ className, onClick, children, tooltip }: ToolbarBtnProps) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const handleShowTooltip = () => {
        setShowTooltip(true)
    }
    const handleHideTooltip = () => {
        setShowTooltip(false)
    }

    return (
        <div className='toolbar-btn' onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltip} onFocus={handleShowTooltip} onBlur={handleHideTooltip}>
            <button onClick={onClick} className={className} >
                {children}
            </button>
            <span className={`tooltip ${showTooltip ? 'tooltip-visible' : 'tooltip-hidden'}`}>
                {tooltip}
            </span>
        </div>
    )
}

export default ToolbarBtn