import React from "react";
import { Row, Col, Image } from "antd";

interface ImageCardProps {
  src: string;
  alt?: string;
  width?: number;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt = "image", width, className = "" }) => {
  return (
    <Row justify="center" align="middle" className="my-4">
      <Col span={24} className={`${className}`}>
        <Image width={width} src={src} alt={alt} />
      </Col>
    </Row>
  );
};

export default ImageCard;
