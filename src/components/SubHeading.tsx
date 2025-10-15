import { Typography } from "antd";
import React from "react";

interface SubHeadingProps {
  text: React.ReactNode;
  className?: string;
  id?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ text, className, id }) => {
  return (
    <Typography.Title level={4} id={id} className={`mb-4 mt-2 ${className}`}>
      {text}
    </Typography.Title>
  );
};

export default SubHeading;