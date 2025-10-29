import { Row } from "antd";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const WeeklyHours = () => {
  return (
    <>
      <Row>
        <SubHeading text="Weekly Hours" />
      </Row>
      <Row>
        <Paragraph
          text={
            <>
              Shows your working details for the past 7 working days, including:
              <ul className="docs-list">
                <li>Daily working time</li>
                <li>Short hours</li>
                <li>Required vs. completed hours</li>
              </ul>
            </>
          }
        />
        <ImageCard src={images.empDashboardWeekelyHours} />
      </Row>
    </>
  );
};

export default WeeklyHours;
