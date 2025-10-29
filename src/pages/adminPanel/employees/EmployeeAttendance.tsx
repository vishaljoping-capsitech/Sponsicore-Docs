import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import SubHeading from "../../../components/SubHeading";

const EmployeeAttendance = () => {
  return (
    <>
      <SubHeading text="Employee Attendance" />
      <Paragraph
        text={
          <>
            Authorized users can track and manage employee-related attendance.
            By clicking the status button, authorized users can add or modify
            attendance as needed. We display various attendance statuses
            monthly, and these also function as filters. We've added a filter to
            view customized data.
          </>
        }
      />
      <ImageCard src={images.adminEmployeeAttendance} />
    </>
  );
};

export default EmployeeAttendance;
