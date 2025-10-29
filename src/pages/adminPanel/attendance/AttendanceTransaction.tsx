import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'
import Title from '../../../components/Title'

const AttendanceTransaction = () => {
  return (
    <>
    <SubHeading text="Attendance In/Out Time" />
    <Paragraph text={<>By default, the system displays only the <Title text='First In' /> and <Title text='Last Out' /> transactions per employee, providing a clear daily overview. Additional In/Out records are revealed on hover, allowing users to access full attendance details without cluttering the interface. This design balances simplicity with comprehensive visibility of all clock-in/out events.</>}/>
    <ImageCard src={images.adminAttendanceTransactions}/>
    </>
  )
}

export default AttendanceTransaction