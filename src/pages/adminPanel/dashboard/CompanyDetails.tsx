import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import Title from "../../../components/Title";
import ImageCard from "../../../components/ImageCard";
import SubHeading from "../../../components/SubHeading";

const CompanyDetails: React.FC = () => {
  return (
    <>
      <SubHeading text="Company Details" />

      <Paragraph
        text={
          <>
            This section gives you a quick snapshot of your company information,
            including the currently active branch and key statistics. The{" "}
            <Title text="Total Number of Employees" /> is highlighted as a{" "}
            <Title text="clickable button" />- just click to view the full{" "}
            <Title text="employee list" /> instantly. It's designed to give you
            fast access to essential company data at a glance.
            <ImageCard src={images.adminDashboardCompanyDetails} />
          </>
        }
      />
    </>
  );
};

export default CompanyDetails;
