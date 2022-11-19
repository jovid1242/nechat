import React from 'react'

// style
import './CCard.scss'

const CCard = ({ className, children }) => {
    return (
        <div className={className}>
            <div className="c-card">{children}</div>
        </div>
    )
}

export default CCard
