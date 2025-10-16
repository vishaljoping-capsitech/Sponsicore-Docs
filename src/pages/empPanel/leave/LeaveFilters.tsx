import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"


const LeaveFilters = () => {
  return (
    <>
      <Paragraph text={<>
        <ul>
          <li id="leave-filter-status"><Title text="Filter by Leave Status" /> Users can filter leave applications based on their current status—such as pending, approved, or rejected. This allows managers and employees to quickly narrow down requests that need action or review. It streamlines the process of monitoring application progress and ensures no pending requests are overlooked.
            <ImageCard src={images.empLeaveStatusFilters} /></li>
          <li id="leave-filter-type"><Title text="Filter by Leave Type" /> Leave requests can also be filtered by their leave type, such as sick leave, vacation, casual leave, or any custom categories defined by the organization. This helps in analyzing leave trends, managing workload distribution, and ensuring proper coverage during employee absences.
            <ImageCard src={images.empLeaveTypeFilters} /></li>
        </ul>
      </>} />
    </>
  )
}

export default LeaveFilters