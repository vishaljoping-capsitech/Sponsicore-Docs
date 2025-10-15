import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";

const EmployeeSponsorshipDetails = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            In this section, we are managing the employee's sponsorship details.
            Admin can able view and edit the sponsorship details like Director,
            Email Address, Contact No, License No, Address etc.
          </>
        }
      />

      <ImageCard src={images.adminEmployeeSponsorshipDetails} />
    </>
  );
};

export default EmployeeSponsorshipDetails;
