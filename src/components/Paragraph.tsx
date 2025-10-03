import { Typography } from 'antd';
import React from 'react'

interface ParagraphProps {
    text: React.ReactNode;
    className?: string;
}

const Paragraph:React.FC<ParagraphProps> = ({text , className}) => {
  return (
    <Typography.Text className={`text-color ${className}`}>{text}</Typography.Text>
  )
}

export default Paragraph