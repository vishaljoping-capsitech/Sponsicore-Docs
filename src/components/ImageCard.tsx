import React, { useState } from "react";
import { Row, Col, Image, Skeleton } from "antd";

interface ImageCardProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt = "image",
  width = "100%",
  height = 400,
  className = "",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Row justify="center" align="middle" className="my-4">
      <Col span={24} className={className}>
        <Row
          className="image-card-wrapper"
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            height: typeof height === "number" ? `${height}px` : height,
          }}
        >
          {!loaded && <Skeleton.Image active className="image-loader" />}

          <Image
            src={src}
            alt={alt}
            preview={false}
            className={`image-card ${loaded ? "visible" : ""}`}
            onLoad={() => setLoaded(true)}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default ImageCard;
