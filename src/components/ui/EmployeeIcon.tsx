import React from 'react';

interface EmployeeIconProps {
    outer: string;
    inner: string;
}

const EmployeeIcon: React.FC<EmployeeIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 21.9999C7 18.3432 9.96432 15.3789 13.621 15.3789C17.2777 15.3789 20.242 18.3432 20.242 21.9999" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="13.623" cy="9.31049" r="3.31049" stroke={inner} strokeWidth="1.4" strokeLinecap="round" />
        </svg>

    )
}

export default EmployeeIcon