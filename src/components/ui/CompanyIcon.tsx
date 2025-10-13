import React from 'react';

interface CompanyIconProps {
    outer: string;
    inner: string;
}

const CompanyIcon: React.FC<CompanyIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.79844 4H18.5984C19.5926 4 20.3984 4.80589 20.3984 5.8V20.2C20.3984 21.1941 19.5926 22 18.5984 22H7.79844C6.80433 22 5.99844 21.1941 5.99844 20.2V5.8C5.99844 4.80589 6.80433 4 7.79844 4Z" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M15.8984 21.9984V19.3984C15.8984 18.8462 15.4507 18.3984 14.8984 18.3984H11.4984C10.9462 18.3984 10.4984 18.8462 10.4984 19.3984V21.9984" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M16.8008 7.60156H16.7918" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M9.60156 7.60156H9.59256" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M13.1992 7.60156H13.1902" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M13.1992 11.1992H13.1902" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M13.1992 14.8008H13.1902" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M9.60156 11.1992H9.59256" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M9.60156 14.8008H9.59256" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M16.8008 11.1992H16.7918" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M16.8008 14.8008H16.7918" stroke={inner} strokeWidth="1.6" strokeLinecap="round" />
        </svg>

    )
}

export default CompanyIcon