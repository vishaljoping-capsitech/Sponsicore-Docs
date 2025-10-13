import { Typography } from 'antd';
import React from 'react'

interface ParagraphProps {
  text: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return (
      <Typography.Paragraph className={`${className} mb-1`}>{text}</Typography.Paragraph>
  )
}

export default Paragraph