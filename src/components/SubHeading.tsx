import { Typography } from "antd";
import React from "react";

interface SubHeadingProps {
  text: React.ReactNode;
  className?: string;
  id?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ text, className, id }) => {
  return (
    <Typography.Title level={3} id={id} className={`my-4 ${className}`}>
      {text}
    </Typography.Title>
  );
};

export default SubHeading;