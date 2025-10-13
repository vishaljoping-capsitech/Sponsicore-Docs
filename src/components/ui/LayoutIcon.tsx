import React from 'react'

interface LayoutIconProps { 
    outer: string;
    inner: string;
}

const LayoutIcon: React.FC<LayoutIconProps> = ({outer, inner}) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2222 6H7.77778C6.79594 6 6 6.79594 6 7.77778V20.2222C6 21.2041 6.79594 22 7.77778 22H20.2222C21.2041 22 22 21.2041 22 20.2222V7.77778C22 6.79594 21.2041 6 20.2222 6Z" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M7.40234 11.332H20.6M11.334 20.5987V11.332" stroke={inner} strokeWidth="1.4" strokeLinecap="square" />
        </svg>

    )
}

export default LayoutIcon