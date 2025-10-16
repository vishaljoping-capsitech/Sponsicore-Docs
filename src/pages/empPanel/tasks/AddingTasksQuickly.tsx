import Paragraph from "../../../components/Paragraph"

const AddingTasksQuickly = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ul>
              <li>If no task has been added for a specific day, a “Task Not Added” label appears.</li>
              <li>Employees can click this label to add a new task instantly for that day.</li>
            </ul>
          </>
        }
      />
    </>
  )
}

export default AddingTasksQuickly