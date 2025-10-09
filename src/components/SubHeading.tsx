import { Typography } from 'antd';
import React from 'react'

interface SubHeadingProps {
    text: React.ReactNode;
    className?: string;
    isDarkMode: boolean;
    setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubHeading:React.FC<SubHeadingProps> = ({text, className , isDarkMode}) => {
  return (
    <Typography.Title level={4} className={`font-bold mb-4 mt-2 ${isDarkMode ? "text-color-darkmode" : "theme-color"} ${className}`}>{text}</Typography.Title>
  )
}

export default SubHeading;