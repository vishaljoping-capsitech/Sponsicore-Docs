import React from 'react'

interface TravelIconProps {
    outerColor: string;
    innerColor: string;
}

const TravelIcon: React.FC<TravelIconProps> = ({ outerColor, innerColor }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10.6484C8 9.54387 8.89543 8.64844 10 8.64844H18C19.1046 8.64844 20 9.54387 20 10.6484V21.2484C20 22.353 19.1046 23.2484 18 23.2484H10C8.89543 23.2484 8 22.353 8 21.2484V10.6484Z" stroke={outerColor} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M12 15.2941V20M16 12V20" stroke={innerColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.2008 7.8V4.2C15.2008 3.53726 14.6635 3 14.0008 3C13.338 3 12.8008 3.53726 12.8008 4.2V7.8" stroke={outerColor} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M10.3984 24.6C10.3984 24.2686 10.6671 24 10.9984 24C11.3298 24 11.5984 24.2686 11.5984 24.6C11.5984 24.9314 11.3298 25.2 10.9984 25.2C10.6671 25.2 10.3984 24.9314 10.3984 24.6Z" stroke={outerColor} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M16.3984 24.6C16.3984 24.2686 16.6671 24 16.9984 24C17.3298 24 17.5984 24.2686 17.5984 24.6C17.5984 24.9314 17.3298 25.2 16.9984 25.2C16.6671 25.2 16.3984 24.9314 16.3984 24.6Z" stroke={outerColor} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M9.19922 10.3203L10.3992 9.12031L11.5992 10.3203V13.3203H9.19922V10.3203Z" fill={innerColor} />
            <rect x="10.1016" y="7.80078" width="0.6" height="2.4" fill={innerColor} />
        </svg>

    )
}

export default TravelIcon