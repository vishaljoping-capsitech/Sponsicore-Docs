import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const LeaveOverview = () => {
    return (
        <>
            <Paragraph text="A range of filters are introduced to help users easily view and manage leave applications based on specific criteria. These filters allow sorting and searching by factors such as leave status (pending, approved, rejected), leave type (sick leave, vacation, etc.), date ranges, employee names, and departments. By applying these filters, managers and employees can quickly find relevant leave requests without having to sift through large volumes of data. This feature enhances efficiency, improves user experience, and supports better tracking and decision-making within the leave management system." />
            <ImageCard src={images.empLeaveOverview} />
        </>
    )
}

export default LeaveOverview