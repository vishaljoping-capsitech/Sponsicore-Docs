import React from "react";
import { Row, Col, Image } from "antd";
 
interface ImageCardProps {
  src: string;
  alt?: string;
  width?: string;
  borderRadius?: number;
  lg?: number;
  sm?: number;
  className?: string;
}
 
const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt = "image",
  width = "",
  borderRadius = 8,
  className = "",
}) => {
  return (
    <Row align="middle" className="my-8">
      <Col style={{ borderRadius }} span={24} className={className}>
        <Image style={{ borderRadius }} className={`${width}`} src={src} alt={alt} />
      </Col>
    </Row>
  );
};
 
export default ImageCard