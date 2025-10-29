import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"
import Title from "../../../components/Title"


const RequestTypes = () => {
    return (
        <>
        <SubHeading text="Request Types" className="margin-top-point-5rem" />
        <Paragraph text={<>
            <ul className="docs-list">
                <li><Title text="Address Update Request:" /> This request is made when an employee needs to update their residential address for accurate records and correspondence.</li>
                <li><Title text="Bank Details Update Request:" /> For requesting to update bank account information, ensuring correct salary and payment processing.</li>
                <li><Title text="Client Meeting Request:" /> For requesting permission to attend off-site client meetings. Applicable only for future dates to track external work commitments.</li>
                <li><Title text="Correction Request:" /> Filed to fix missing or inaccurate attendance clock-in/out times. Valid for past dates with recorded attendance transactions, including the current day.</li>
                <li><Title text="Missing Card Request:" /> Used when an employee forgets their clock-in/out card. Corrects attendance retroactively for previous dates.</li>
                <li><Title text="Other Request:" /> For miscellaneous or unique requests not covered by predefined categories.</li>
                <li><Title text="Unauthorized Absence Request:" /> Allows employees to justify unapproved absences. Applicable only for past dates.</li>
                <li><Title text="Work From Home Request:" /> This request is made by employees working remotely. Applicable for current and future dates. Pending requests allow normal clock-in/out while approved requests update attendance. Cancellations allowed only under specific conditions.</li>
                <li><Title text="Work From Client Site Request:" /> Similar to WFH, for working from a client location. Follows the same rules for pending, approved, and cancellable requests.
                    <ImageCard src={images.empRequestPanel} />
                </li>
            </ul>

        </>} />
        </>
    )
}

export default RequestTypes