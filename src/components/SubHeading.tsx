import React from "react";
import { Typography } from "antd";

interface SubHeadingProps {
  text: React.ReactNode;
  className?: string;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  style?: React.CSSProperties;
}

const SubHeading: React.FC<SubHeadingProps> = ({ text, className, id, level = 3, style }) => {
  return (
    <Typography.Title level={level} id={id} className={`flex items-center gap-2 ${className || ""}`} style={style}>
      {text}
    </Typography.Title>
  );
};

export default SubHeading;
