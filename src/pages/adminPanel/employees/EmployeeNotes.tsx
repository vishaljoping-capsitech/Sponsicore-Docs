import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import SubHeading from "../../../components/SubHeading";

const EmployeeNotes = () => {
  return (
    <>
      <SubHeading text="Employee Notes" />
      <Paragraph
        text={
          <>
            Authorized users can add, edit, or remove notes. User can write
            notes related to this employee. These notes will not be visible to
            the employee.
          </>
        }
      />
      <ImageCard src={images.adminEmployeeNotes} />
    </>
  );
};

export default EmployeeNotes;
