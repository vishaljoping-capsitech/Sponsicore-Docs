import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'
import Title from '../../../components/Title'

const AttendanceStatuses = () => {
  return (
    <>
    <SubHeading text="Marking Attendance" />
    <Paragraph text={
        <>
        <ul className='docs-list'>
            <li id='attendance-single-day'><Title text='Single Day Attendance Marking:' /> When editing attendance for a single date, users have full flexibility to choose from all available attendance types. This includes Punch Time, Present, Half Day, Work From Home (WFH), WFH + Leave, Work From Client (WFC), WFC + Leave, and Leave. This comprehensive range allows precise and detailed attendance management tailored to the specific circumstances of that day.
            <ImageCard src={images.adminAttendanceStatus}/></li>
            <li id='attendance-multiple-days'><Title text='Multiple Days Attendance Marking:' /> For marking attendance across multiple dates in bulk, users can only select Present or Leave statuses. This limitation simplifies the process for bulk updates, ensuring quick and efficient marking of standard attendance or leave over a range of dates, while more detailed or mixed attendance types remain available only for individual date adjustments.
            <ImageCard src={images.adminAttendanceStatusMultipleDays}/></li>
        </ul>
        </>
    } />
    </>
  )
}

export default AttendanceStatuses