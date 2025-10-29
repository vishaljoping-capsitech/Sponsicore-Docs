import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"

const TaskDetails = () => {
  return (
    <>
      <SubHeading text="Task Details" className="margin-top-point-5rem"/>
      <Paragraph
        text={
          <>
            Clicking on a task title opens the Task Overview, where employees can view complete task information such as description, attachments, and due date.
          </>
        }
      />
      <ImageCard src={images.empTasksDetails} />
    </>
  )
}

export default TaskDetails