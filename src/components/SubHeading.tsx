import { Typography } from 'antd';
import React from 'react'

interface SubHeadingProps {
    text: React.ReactNode;
    className?: string;
}

const SubHeading:React.FC<SubHeadingProps> = ({text, className}) => {
  return (
    <Typography.Title level={4} className={`font-bold mb-4 mt-2 theme-color ${className}`}>{text}</Typography.Title>
  )
}

export default SubHeading;