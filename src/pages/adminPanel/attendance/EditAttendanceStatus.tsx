import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'

const EditAttendanceStatus = () => {
    return (
        <>
            <Paragraph text={
                <>
                    <ul>
                        <li><Title text='Punch Time:' /> This option allows users to manually mark the exact In and Out transactions for an employee. It's useful when precise clock-in and clock-out times need to be recorded or corrected, such as when automatic punches are missing or need adjustment.</li>
                        <li><Title text='Present:' /> When marking an employee as Present manually, the system automatically adds the standard In/Out times based on the employee's assigned shift (for example, 09:00 AM to 05:00 PM). In this case, no manual punch button is shown because the attendance is recorded according to the predefined shift schedule.</li>
                        <li><Title text='Half Day:' /> This status splits the workday into two halves—one marked as Present and the other as Absent. The user selects which half of the day the employee attended, and the system automatically adds two In/Out transactions that correspond to half of the assigned shift hours. Since this is an automated entry, no punch button is displayed.</li>
                        <li><Title text='WFH (Work From Home):' /> When an employee is working remotely, users can manually mark the day as Work From Home. Unlike the regular Present status, users can manually input the In/Out times to reflect flexible working hours during remote work.</li>
                        <li><Title text='WFH + Leave:' /> This hybrid status allows users to mark a day where the employee works Half Work From Home and takes Half Leave. The user selects which half is leave, and the system automatically counts the other half as Work From Home, providing accurate attendance tracking for mixed-status days.</li>
                        <li><Title text='WFC (Work From Client):' /> If the employee is working at a client's site, users can mark the day as Work From Client. Similar to WFH, users can manually enter the In/Out times to accurately reflect working hours outside the main office location.</li>
                        <li><Title text='WFC + Leave:' /> This option enables marking a day as Half Work From Client and Half Leave. The user selects the leave half, while the other half is recorded as Work From Client, allowing for precise attendance logging on split-status days.</li>
                        <li><Title text='Leave:' /> Users can manually apply Leave for an employee, choosing between full-day or half-day leave. If half-day leave is selected, a punch button appears, allowing users to manually mark the In/Out times for the half day that the employee is actually working.
                        <ImageCard src={images.adminAttendanceEditStatus} /></li>
                    </ul>
                </>
            } />
        </>
    )
}

export default EditAttendanceStatus