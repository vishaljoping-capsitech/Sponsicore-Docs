import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import Title from "../../../components/Title";
import ImageCard from "../../../components/ImageCard";

const CompanyDetails: React.FC = () => {
  return (
    <Paragraph
      text={
        <>
          <ImageCard src={images.adminDashboardCompanyDetails} />
          This section gives you a quick snapshot of your company information,
          including the currently active branch and key statistics. The{" "}
          <Title text="Total Number of Employees" /> is highlighted as a{" "}
          <Title text="clickable button" />- just click to view the full{" "}
          <Title text="employee list" /> instantly. It's designed to give you
          fast access to essential company data at a glance.
        </>
      }
    />
  );
};

export default CompanyDetails;
