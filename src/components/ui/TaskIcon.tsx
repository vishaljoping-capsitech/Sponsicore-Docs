import React from 'react'

interface TaskIconProps {
    outer: string;
    inner: string;
}

const TaskIcon: React.FC<TaskIconProps> = ({ outer, inner }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 6H8C6.89543 6 6 6.89543 6 8V20C6 21.1046 6.89543 22 8 22H20C21.1046 22 22 21.1046 22 20V11M17 6L19.5 8.5L22 11M17 6V9C17 10.1046 17.8954 11 19 11H22" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M12 14.6154L13.2632 16L16 13" stroke={inner} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default TaskIcon