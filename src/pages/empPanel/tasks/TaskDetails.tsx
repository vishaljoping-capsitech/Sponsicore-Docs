import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const TaskDetails = () => {
  return (
    <>
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