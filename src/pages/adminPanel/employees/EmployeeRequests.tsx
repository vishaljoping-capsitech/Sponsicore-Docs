import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import SubHeading from "../../../components/SubHeading";

const EmployeeRequest = () => {
  return (
    <>
      <SubHeading text="Employee Request" />
      <Paragraph
        text={
          <>
            Authorized users can manage employee-related all requests here and
            take appropriate actions accordingly by clicking the status button.
            We display various request types as bricks, which also function as
            filters. We've added a filter to view customized data.
          </>
        }
      />

      <ImageCard src={images.adminEmployeeRequest} />
    </>
  );
};

export default EmployeeRequest;
