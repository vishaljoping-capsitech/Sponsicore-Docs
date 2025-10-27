import React from "react";
import { Typography } from "antd";

interface SubHeadingProps {
  text: React.ReactNode;
  className?: string;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconStyle?: React.CSSProperties;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  text,
  className,
  id,
  level = 3,
  icon,
  iconPosition = "left",
  iconStyle,
}) => {
  return (
    <Typography.Title
      level={level}
      id={id}
      className={`flex items-center gap-2 ${className || ""}`}
      style={{ marginTop: "0.5em" }}
    >
      {icon && iconPosition === "left" && <span style={iconStyle}>{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === "right" && <span style={iconStyle}>{icon}</span>}
    </Typography.Title>
  );
};

export default SubHeading;
