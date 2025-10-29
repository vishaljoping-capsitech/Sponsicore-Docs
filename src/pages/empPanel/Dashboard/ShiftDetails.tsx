import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"

const ShiftDetails = () => {
  return (
    <>
      <SubHeading text="Shift Details" className="margin-top-point-5rem"/>
      <Paragraph 
        text={
          <>
            Shows your shift effective date, working hours (from-to), total working duration, and lunch break minutes. It also indicates working days and weekends, clearly highlighting your shift schedule.
          </>
        }
      />
      <ImageCard src={images.empDashboardShiftTimings} />
    </>
  )
}

export default ShiftDetails