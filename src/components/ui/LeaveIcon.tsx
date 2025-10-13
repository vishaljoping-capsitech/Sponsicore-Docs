import React from 'react'

interface LeaveIconProps {
    outer: string;
    inner: string;
}

const LeaveIcon: React.FC<LeaveIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3093 20.9925L15.1906 14.7017" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M20.7561 12.5231C21.2703 12.3217 21.5143 11.7427 21.2169 11.2736C20.4465 10.0585 19.2815 9.09978 17.8828 8.55005C16.1598 7.87282 14.2234 7.8718 12.4996 8.54719C10.7758 9.22258 9.4058 10.5191 8.69097 12.1514C8.11071 13.4765 8.00077 14.9348 8.36126 16.3105C8.50045 16.8416 9.10482 17.0881 9.61904 16.8867L20.7561 12.5231Z" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M12.5001 8.54706L12.1641 7.77734" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M6 22.0006C6.21256 21.8999 6.6423 21.6307 7.10375 21.3285C8.17383 20.6276 9.39081 20.452 10.534 21.0259C11.4658 21.4937 12.7007 21.5711 13.643 21.1248L14.344 20.7927C15.1704 20.4013 16.1395 20.4599 16.9126 20.9482C17.7681 21.4885 18.8555 21.4988 19.7211 20.9747L21.0597 20.1641" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default LeaveIcon