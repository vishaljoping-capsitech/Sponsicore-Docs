import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";

const ProfileInfo = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            This section is divided into five key parts where employees can view and manage their details: Basic Details, Bank Details, Emergency Contact Details, Job Details, and Leave Data (Taken and Allowed).
            <ul>
              <li> Employees can update their contact number, alternate contact number, and home address under Basic Information. </li>
              <li> They can also update their Emergency Contact Details directly. </li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empProfile} />
    </>
  );
};

export default ProfileInfo;
