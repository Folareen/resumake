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
        <button onClick={onClick} className={`toolbar-btn ${className}`} onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltip} onFocus={handleShowTooltip} onBlur={handleHideTooltip}>
            <span>
                {children}
            </span>
            <span className={`tooltip ${showTooltip ? 'tooltip-visible' : 'tooltip-hidden'}`}>
                {tooltip}
            </span>
        </button>
    )
}

export default ToolbarBtn