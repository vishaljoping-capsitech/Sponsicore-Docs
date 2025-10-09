import React from 'react';

interface PoliciesIconProps {
    outerColor: string;
    innerColor: string;
}

const PoliciesIcon: React.FC<PoliciesIconProps> = ({ outerColor, innerColor }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3984 10.8H23.3984V8.4C23.3984 8.4 23.3984 6 21.3984 6" stroke={outerColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.00006 18H15C15.0203 20.1575 15.4 21.6 17 22H7.00005C5.32709 21.1899 4.99496 20.217 5.00006 18Z" stroke={outerColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.60156 18V10C6.60156 7.79086 8.39242 6 10.6016 6L21.4016 6C19.4016 6.4 19.4016 8.8 19.4016 10.4V19.6C19.4016 20.9255 18.327 22 17.0016 22" stroke={outerColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 15H16" stroke={innerColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.8896 8.30859C13.0006 8.29067 13.115 8.30004 13.2227 8.33594L14.7217 8.83594C15.0737 8.95345 15.2731 9.32545 15.1758 9.68359L14.6768 11.5166C14.6324 11.6798 14.5304 11.8222 14.3896 11.916L13.3896 12.582C13.1545 12.7388 12.8484 12.7388 12.6133 12.582L11.6133 11.916C11.4728 11.8224 11.3707 11.6804 11.3262 11.5176L10.8252 9.68457C10.7271 9.32597 10.9266 8.95341 11.2793 8.83594L12.7803 8.33594L12.8896 8.30859Z" stroke={innerColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default PoliciesIcon