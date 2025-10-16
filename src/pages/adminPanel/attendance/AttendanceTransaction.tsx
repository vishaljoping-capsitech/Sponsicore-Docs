import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'

const AttendanceTransaction = () => {
  return (
    <>
    <Paragraph text={<>By default, the system displays only the <Title text='First In' /> and <Title text='Last Out' /> transactions for each employee, providing a clear and concise overview of their attendance for the day. This helps users quickly identify the main clock-in and clock-out times without cluttering the interface. However, to offer more detailed insights, any additional **In/Out** transactions beyond the first and last are revealed when the user hovers over the transaction area. This hover feature allows users to access all clock-in and clock-out records effortlessly, giving a fuller picture of the employee's attendance patterns while keeping the main view clean and easy to read.</>}/>
    <ImageCard src={images.adminAttendanceTransactions}/>
    </>
  )
}

export default AttendanceTransaction