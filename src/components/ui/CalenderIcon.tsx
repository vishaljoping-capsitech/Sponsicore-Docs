import React from 'react'

interface CalenderIconProps {
    outer: string;
    inner: string;
}

const CalenderIcon: React.FC<CalenderIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1538 7.78906H7.84615C6.82655 7.78906 6 8.58441 6 9.56552V20.2243C6 21.2054 6.82655 22.0008 7.84615 22.0008H20.1538C21.1734 22.0008 22 21.2054 22 20.2243V9.56552C22 8.58441 21.1734 7.78906 20.1538 7.78906Z" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M14 13.7002C14.1657 13.7002 14.2998 13.8343 14.2998 14C14.2998 14.1657 14.1657 14.2998 14 14.2998C13.8343 14.2998 13.7002 14.1657 13.7002 14C13.7002 13.8343 13.8343 13.7002 14 13.7002Z" fill={inner} stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 13.7002C9.66569 13.7002 9.7998 13.8343 9.7998 14C9.7998 14.1657 9.66569 14.2998 9.5 14.2998C9.33431 14.2998 9.2002 14.1657 9.2002 14C9.2002 13.8343 9.33431 13.7002 9.5 13.7002Z" fill={inner} stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 18.1221C9.66569 18.1221 9.7998 18.2562 9.7998 18.4219C9.7998 18.5876 9.66569 18.7217 9.5 18.7217C9.33431 18.7217 9.2002 18.5876 9.2002 18.4219C9.2002 18.2562 9.33431 18.1221 9.5 18.1221Z" fill={inner} stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 18.1221C14.1657 18.1221 14.2998 18.2562 14.2998 18.4219C14.2998 18.5876 14.1657 18.7217 14 18.7217C13.8343 18.7217 13.7002 18.5876 13.7002 18.4219C13.7002 18.2562 13.8343 18.1221 14 18.1221Z" fill={inner} stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 13.7002C18.6657 13.7002 18.7998 13.8343 18.7998 14C18.7998 14.1657 18.6657 14.2998 18.5 14.2998C18.3343 14.2998 18.2002 14.1657 18.2002 14C18.2002 13.8343 18.3343 13.7002 18.5 13.7002Z" fill={inner} stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 18.1221C18.6657 18.1221 18.7998 18.2562 18.7998 18.4219C18.7998 18.5876 18.6657 18.7217 18.5 18.7217C18.3343 18.7217 18.2002 18.5876 18.2002 18.4219C18.2002 18.2562 18.3343 18.1221 18.5 18.1221Z" fill={inner} stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 6V6.94745M19 6V6.94745" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M22 11H6" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    )
}

export default CalenderIcon