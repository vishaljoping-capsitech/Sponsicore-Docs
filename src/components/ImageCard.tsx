import React from "react";
import { Row, Col, Image } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

interface ImageCardProps {
  src: string;
  alt?: string;
  width?: number;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt = "image", width, className = "" }) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <Row justify="center" align="middle" className="my-4">
      <Col span={24} className={`p-2 ${className}`}
        style={{ backgroundColor: mode === "dark" ? "#4C3B63" : "#F3F3FF", borderRadius: 8 }}>
        <Image width={width} src={src} alt={alt} />
      </Col>
    </Row>
  );
};

export default ImageCard;
