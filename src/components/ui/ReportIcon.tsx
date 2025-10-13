import React from 'react'

interface ReportIconProps {
    outer: string;
    inner: string;
}

const ReportIcon: React.FC<ReportIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0693 5.2998C16.6648 5.2998 17.2438 5.49729 17.7158 5.86035L19.6465 7.34473C20.3107 7.85574 20.7001 8.64634 20.7002 9.48438V20C20.7002 21.4912 19.4912 22.7002 18 22.7002H9C7.50883 22.7002 6.2998 21.4912 6.2998 20V8C6.2998 6.50883 7.50883 5.2998 9 5.2998H16.0693Z" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M10.5 17.5L10.5 12.5" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5 17.5L13.5 16.5" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 17.5L16.5 13.5" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ReportIcon