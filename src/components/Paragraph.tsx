import { Typography } from 'antd';
import React from 'react'

interface ParagraphProps {
    text: React.ReactNode;
}

const Paragraph:React.FC<ParagraphProps> = ({text}) => {
  return (
    <Typography.Text className='text-color'>{text}</Typography.Text>
  )
}

export default Paragraph