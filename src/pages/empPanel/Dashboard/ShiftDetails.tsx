import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const ShiftDetails = () => {
  return (
    <>
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