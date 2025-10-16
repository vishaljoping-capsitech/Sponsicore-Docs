import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const TasksOverview = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Employees can view all their tasks on a monthly calendar.
            <ul>
              Each day displays:
              <li>The total number of tasks created on that day</li>
              <li>Task titles, descriptions, and any attachments</li>
              <li>The employee's day status (e.g., Present, Absent, Leave, Holiday, Weekend, On-Trip, etc.)</li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empTasks} />
    </>
  )
}

export default TasksOverview