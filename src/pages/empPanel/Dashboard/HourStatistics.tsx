import { Row } from "antd";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const HourStatistics = () => {
  return (
    <>
      <Row>
        <SubHeading text="Hour Statistics" />
      </Row>
      <Row>
        <Paragraph
          text={
            <>
              Summarizes your monthly hour performance, including:
              <ul className="docs-list">
                <li>Average working hours</li>
                <li>Total break time</li>
                <li>Short hours or overtime accumulated during the month</li>
              </ul>
            </>
          }
        />
        <ImageCard src={images.empDashboardHourStatistics} />
      </Row>
    </>
  );
};

export default HourStatistics;
