import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";

const EmployeeTask = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            The user can view employee-related tasks. If a task has not been
            added by the employee, the user can send a notification and email to
            the employee. We also display the employee's status for that
            day—such as Present, Absent, Week Off, Holiday, etc. We also display
            the total due tasks for the selected month. We've added a filter to
            view customized data.
          </>
        }
      />
      <ImageCard src={images.adminEmployeeTask} />
    </>
  );
};

export default EmployeeTask;
