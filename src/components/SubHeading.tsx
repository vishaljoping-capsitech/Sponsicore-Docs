import { Typography } from 'antd';
import React from 'react'

interface SubHeadingProps {
    text: string;
}

const SubHeading:React.FC<SubHeadingProps> = ({text}) => {
  return (
    <Typography.Title level={4} className="font-bold mb-4 mt-2 theme-color">{text}</Typography.Title>
  )
}

export default SubHeading;