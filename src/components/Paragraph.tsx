import { Row, Typography } from 'antd';
import React from 'react'

interface ParagraphProps {
  text: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return (
    <Row>
      <Typography.Text className={`text-color ${className}`}>{text}</Typography.Text>
    </Row>
  )
}

export default Paragraph