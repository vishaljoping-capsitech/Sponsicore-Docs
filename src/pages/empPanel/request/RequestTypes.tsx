import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"


const RequestTypes = () => {
    return (
        <Paragraph text={<>
            <ul>
                <li><Title text="Address Update Request:" /> This request is used when an employee needs to update or change their current residential address on file. Keeping address details accurate is essential for official correspondence and record-keeping.</li>
                <li><Title text="Bank Details Update Request:" /> Employees can submit this request to update their bank account information, such as account number or bank name, ensuring salary and other payments are processed correctly and without delay.</li>
                <li><Title text="Client Meeting Request:" /> When an employee needs to leave the office to attend a meeting at a client's location, this request must be submitted. It is only applicable for future dates and helps management keep track of off-site work commitments.</li>
                <li><Title text="Correction Request:" /> If there are inaccuracies or missing clock-in/out times in the attendance records, employees can file this request. It is valid only for days with recorded attendance transactions and can be applied for past dates, including the current day for time already passed.</li>
                <li><Title text="Missing Card Request:" /> This request is for situations where an employee forgets to carry their clock-in/out card, leading to missing attendance data. It can only be submitted for previous dates to correct attendance records retroactively.</li>
                <li><Title text="Other Request:" /> For any special or miscellaneous requests that do not fall under the predefined categories, employees can use this option to communicate unique needs or circumstances.</li>
                <li><Title text="Unauthorized Absence Request:" /> If an employee was absent without prior approval, this request allows them to provide an explanation or justification. It can only be submitted for past dates to address unplanned absences properly.</li>
                <li><Title text="Work From Home Request:" /> Employees wishing to work remotely for a certain period can submit this request. It is applicable only for future dates, including the current day. If the request is pending, employees may still clock in/out normally. Once approved, attendance will be processed accordingly. Cancellation is possible only if the date hasn't passed, no clock-in/out exists, or the request status is still pending.</li>
                <li><Title text="Work From Client Site Request:" /> Similar to WFH, this request is for employees working from a client's location. It is allowed for future dates, including today. Pending requests allow normal clock in/out, and approval updates attendance records. Cancellation follows the same conditions as WFH requests.
                    <ImageCard src={images.empRequestPanel} /></li>
            </ul>
        </>} />
    )
}

export default RequestTypes