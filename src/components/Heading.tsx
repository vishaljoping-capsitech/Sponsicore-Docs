import { Row, Typography } from 'antd';
import React from 'react';
import '../css/common.css';

interface HeadingProps {
  text: string;
  isDarkMode: boolean;
  setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className, isDarkMode }) => {
  return (
    <Row>
      <Typography.Title level={2} className={`${isDarkMode ? "text-color-darkmode" : "theme-color"} font-bold mb-4 mt-2 ${className}`}>
        {text}
      </Typography.Title>
    </Row>
  );
};

export default Heading;