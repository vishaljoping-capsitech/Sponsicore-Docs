import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import Title from "../../../components/Title";
import ImageCard from "../../../components/ImageCard";
import SubHeading from "../../../components/SubHeading";

const SponsoredEmployees: React.FC = () => {
  return (
    <>
      <SubHeading text="Sponsored Employees" />
      <Paragraph
        text={
          <>
            The Sponsored Employees section gives you a quick overview of your{" "}
            <Title text="active sponsored workforce" />, providing real-time
            visibility into your team's sponsorship status. With just a click,
            you can dive deeper into <Title text="detailed employee data" />,
            helping you stay <Title text="informed, proactive, and compliant" />
            -all from one centralized dashboard.
            <ImageCard src={images.adminDashboardSponsoredEmpList} />
          </>
        }
      />
    </>
  );
};

export default SponsoredEmployees;
