import React from 'react';

interface ReaquestIconProps {
    outer: string;
    inner: string;
}

const ReaquestIcon: React.FC<ReaquestIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7.77734H13.5062H16.8315C17.2993 7.77734 17.7524 7.94138 18.1118 8.2409L19.5026 9.39987C19.9586 9.77986 20.2222 10.3428 20.2222 10.9363V15.2835V19.9996C20.2222 21.1041 19.3268 21.9996 18.2222 21.9996H8C6.89543 21.9996 6 21.1041 6 19.9996V9.77734C6 8.67277 6.89543 7.77734 8 7.77734Z" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M17.7755 7.83263L20.0042 9.95615M19.4492 6L21.9256 8.31148L14.4591 16.3104L11.6838 16.8015L11.9828 13.9989L19.4492 6Z" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default ReaquestIcon