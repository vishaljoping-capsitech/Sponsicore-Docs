import { Typography } from "antd";
import React from "react";

interface ParagraphProps {
  text: React.ReactNode;
  className?: string;
  id?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className, id }) => {
  return (
    <Typography.Paragraph id={id} className={`${className} text-base font-normal m-0 p-0`}>
      {text}
    </Typography.Paragraph>
  );
};

export default Paragraph;