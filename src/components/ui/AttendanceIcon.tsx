import React from 'react'

interface AttendanceIconsProps {
  outer: string;
  inner: string;
}

const AttendanceIcon: React.FC<AttendanceIconsProps> = ({ outer, inner }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0597 16.2941V7C21.0597 5.89543 20.1642 5 19.0597 5H8C6.89543 5 6 5.89543 6 7V18.0588C6 19.1634 6.89543 20.0588 8 20.0588H14.4711" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9.19922 9.01562H11.3327" stroke={inner} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.4648 9.01562H18.2651" stroke={inner} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9.19922 12.0273H11.3327" stroke={inner} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.4648 12.0273H18.2651" stroke={inner} strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="18.2337" cy="19.1163" rx="3.76492" ry="3.7647" stroke={outer} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16.9531 18.969L17.8547 20.0572L19.7474 18.4102" stroke={inner} strokeWidth="1.2" strokeLinecap="round" />
    </svg>

  )
}

export default AttendanceIcon