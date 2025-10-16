import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'

const AttendanceFilter = () => {
    return (
        <>
            <Paragraph text="It is designed with a range of dynamic filters to enhance usability and streamline the data viewing experience. These filters allow users to narrow down the displayed information based on specific criteria such as attendance status (e.g., present, absent, late), shift timings, or date ranges. It's important to note that all filters—except for the **Month** filter—are applied specifically to the **employee list** on the page. When any of these filters are adjusted, the list of employees automatically updates to reflect only those who meet the selected criteria, making it easier for users to focus on relevant individuals. The **Month** filter, on the other hand, changes the time frame for the detailed attendance data displayed for the selected employee. Users can conveniently switch between employees using the dynamically updated list, allowing for quick comparisons or in-depth reviews of multiple team members without having to leave the page. This intelligent filtering system ensures a smooth and efficient navigation experience while offering powerful insights into employee attendance patterns." />
            <ImageCard src={images.adminAttendanceFilter} />
        </>
    )
}

export default AttendanceFilter