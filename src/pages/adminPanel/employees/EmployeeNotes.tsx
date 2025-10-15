import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";

const EmployeeNotes = () => {
  return (
    <>
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
