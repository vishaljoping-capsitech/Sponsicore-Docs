import React from 'react'

interface EmailIconProps {
    outer: string;
    inner: string;
}

const EmailIcon: React.FC<EmailIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 9L14 13.5L21.5 9" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="6" y="8" width="16" height="12" rx="2" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
        </svg>

    )
}

export default EmailIcon