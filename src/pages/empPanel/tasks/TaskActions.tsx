import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"
import Title from "../../../components/Title"

const TaskActions = () => {
  return (
    <>
      <SubHeading text="Task Actions" />
      <Paragraph
        text={
          <>
            Employees can manage their tasks through the following actions:
            <ul className="docs-list">
              <li>
                <Title text="Add Tasks:" /> Create new tasks for the current day.
                <ImageCard src={images.empTasksAdd} />
              </li>

              <li>
                <Title text="Edit Tasks:" /> Editing is allowed only for tasks created today or yesterday.
                <ImageCard src={images.empTasks} />
              </li>
              <li><Title text="Delete Tasks:" /> Deletion is restricted to tasks created on the current day.</li>
            </ul>
          </>
        }
      />
    </>
  )
}

export default TaskActions