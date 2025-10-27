import { Row, Typography } from 'antd';
import React from 'react';
import '../css/common.css';

interface HeadingProps {
  text: string;
  className?: string;
  id?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className, id }) => {
  return (
    <Row>
      <Typography.Title level={1} id={id} className={`font-bold ${className}`}>
        {text}
      </Typography.Title>
    </Row>
  );
};

export default Heading;