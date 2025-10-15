import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";

const EmployeeTravel = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Authorized users can add, edit, update the request status, or remove
            travel requests related to this employee. If an authorized user
            plans travel for an employee, we send a notification and email to
            the travellers. We've added a filter to view customized data.
          </>
        }
      />
      <ImageCard src={images.adminEmployeeTravel} />
    </>
  );
};

export default EmployeeTravel;
