import Paragraph from "../../../components/Paragraph"

const MonthlyFiltering = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ul>
              <li>The system displays the total number of due tasks for the selected month.</li>
              <li>Employees can easily switch between months to filter and review tasks based on different time periods.</li>
            </ul>
          </>
        }
      />
    </>
  )
}

export default MonthlyFiltering