import { Row, Typography } from 'antd';
import React from 'react'

interface ParagraphProps {
  text: React.ReactNode;
  className?: string;
  isDarkMode: boolean;
  setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className, isDarkMode }) => {
  return (
    <Row>
      <Typography.Text className={`${isDarkMode ? "text-color-darkmode" : "text-color"} ${className}`}>{text}</Typography.Text>
    </Row>
  )
}

export default Paragraph