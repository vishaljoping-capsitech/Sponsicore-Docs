import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"


const RequestTypes = () => {
    return (
        <>
            <Paragraph text={<>
                <ul>
                    <li><Title text="Address Update Request:" /> When an employee needs to update their current residential address in the system, typically due to relocation or a change in contact information.</li>
                    <li><Title text="Bank Details Update Request:" /> Used when an employee wants to modify their existing bank account information, such as account number, bank name, or IFSC code, to ensure salary and reimbursements are processed correctly.</li>
                    <li><Title text="Client Meeting Request:" /> Raised when an employee needs permission to leave the office premises for an external client meeting. It helps track movements and maintain records of client interactions.</li>
                    <li><Title text="Correction Request:" /> Submitted when an employee's In/Out times are missing or incorrect in the attendance system, usually due to missed punches or device errors. This request ensures attendance data remains accurate.</li>
                    <li><Title text="Missing Card Request:" /> Applicable when an employee forgets or misplaces their access or punch card, resulting in missing attendance records. This allows admins to log the day's entry manually if needed.</li>
                    <li><Title text="Other Request:" /> A flexible request type meant for any employee needs not covered by predefined categories, such as personal errands, system access issues, or one-time approvals.</li>
                    <li><Title text="Unauthorized Absence Request:" /> Required when an employee is absent without prior intimation. The request allows them to explain the reason for the absence and regularize it in the system.</li>
                    <li><Title text="Work From Home Request:" /> Raised when an employee intends to work remotely for a specific period. It helps HR and managers track off-site productivity and availability.</li>
                    <li><Title text="Work From Client Site Request:" /> Used when an employee needs to work from a client's location instead of the main office. It ensures location tracking and proper attendance recording during the period.
                        <ImageCard src={images.adminRequestOverview} /></li>
                </ul>
            </>} />
        </>
    )
}

export default RequestTypes