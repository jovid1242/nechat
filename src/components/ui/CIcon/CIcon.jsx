import React from 'react'

// styles
import './CIcon.scss'

const CIcon = ({ className, children }) => {
    return (
        <div className={className}>
            <div className="c-icon">{children}</div>
        </div>
    )
}

export default CIcon
