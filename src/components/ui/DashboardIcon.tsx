import React from 'react'

interface DashboardIconProps {
    outer: string;
    inner: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 19L14 22" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M17.4297 22H10.5725" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <rect x="6" y="6" width="16" height="12.8" rx="2" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M9.42969 14.5323L13.0868 11.119L14.9154 13.679L18.5725 10.2656" stroke={inner} strokeWidth="1.4" strokeLinecap="round" />
        </svg>

    )
}

export default DashboardIcon