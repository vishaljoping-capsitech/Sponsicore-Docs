import React from 'react';

interface ProfileIconProps {
    outer: string;
    inner: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7992 20.8C18.7992 19.527 18.2935 18.3061 17.3933 17.4059C16.4932 16.5057 15.2723 16 13.9992 16C12.7262 16 11.5053 16.5057 10.6051 17.4059C9.70493 18.3061 9.19922 19.527 9.19922 20.8" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M14 16C15.6569 16 17 14.6569 17 13C17 11.3431 15.6569 10 14 10C12.3431 10 11 11.3431 11 13C11 14.6569 12.3431 16 14 16Z" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5.2998C18.8049 5.2998 22.7002 9.19512 22.7002 14C22.7002 18.8049 18.8049 22.7002 14 22.7002C9.19512 22.7002 5.2998 18.8049 5.2998 14C5.2998 9.19512 9.19512 5.2998 14 5.2998Z" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    )
}

export default ProfileIcon