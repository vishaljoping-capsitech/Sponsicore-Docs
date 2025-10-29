import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"

const MonthlyFiltering = () => {
  return (
    <>
      <SubHeading text="Monthly Filtering" />
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li>The system displays the total number of due tasks for the selected month.</li>
              <li>Employees can easily switch between months to filter and review tasks based on different time periods.</li>
            </ul>
            <ImageCard src={images.empTasksMonthlyFilttering} />
          </>
        }
      />
    </>
  )
}

export default MonthlyFiltering