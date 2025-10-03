import { Row, Typography } from 'antd';
import React from 'react';
import '../css/common.css';

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text,className }) => {
  return (
    <Row>
      <Typography.Title level={2} className={`font-bold mb-4 mt-2 theme-color ${className}`}>
        {text}
      </Typography.Title>
    </Row>
  );
};

export default Heading;