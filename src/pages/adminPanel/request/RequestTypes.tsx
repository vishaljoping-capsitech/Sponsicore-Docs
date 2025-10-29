import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import SubHeading from '../../../components/SubHeading'

const RequestTypes = () => {
    return (
        <>
        <SubHeading text="Request Types" className="margin-top-point-5rem" />
            <Paragraph text={<>
                <ul className="docs-list">
                    <li><Title text="Address Update Request:" /> For updating an employee's residential address due to relocation or contact changes.</li>
                    <li><Title text="Bank Details Update Request:" /> To modify bank account information for accurate salary and reimbursement processing.</li>
                    <li><Title text="Client Meeting Request:" /> For requesting permission to leave the office for external client meetings, ensuring proper tracking.</li>
                    <li><Title text="Correction Request:" /> To fix missing or incorrect In/Out times in the attendance system caused by missed punches or errors.</li>
                    <li><Title text="Missing Card Request:" /> For days when an employee forgets or loses their access/punch card, allowing manual logging of attendance.</li>
                    <li><Title text="Other Request:" /> Flexible request type for miscellaneous needs not covered by predefined categories.</li>
                    <li><Title text="Unauthorized Absence Request:" /> For unnotified absences, enabling employees to explain and regularize their attendance.</li>
                    <li><Title text="Work From Home Request:" /> For employees working remotely, helping track off-site productivity and availability.</li>
                    <li><Title text="Work From Client Site Request:" /> For employees working at a client location, ensuring accurate attendance and location tracking.
                        <ImageCard src={images.adminRequestOverview} />
                    </li>
                </ul>

            </>} />
        </>
    )
}

export default RequestTypes