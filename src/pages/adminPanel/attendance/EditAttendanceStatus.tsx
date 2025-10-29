import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'
import Title from '../../../components/Title'

const EditAttendanceStatus = () => {
    return (
        <>
        <SubHeading text="Attendance Status Types" />
            <Paragraph text={
                <>
                    <ul className='docs-list'>
                        <li><Title text='Punch Time:' /> Manually mark exact In/Out transactions for precise or corrected attendance.</li>
                        <li><Title text='Present:' /> Marks the employee as present and automatically adds standard In/Out times based on their assigned shift. No punch button is shown.</li>
                        <li><Title text='Half Day:' /> Splits the day into Present and Absent halves. Users select the attended half while the system adds corresponding In/Out transactions. No punch button is shown.</li>
                        <li><Title text='WFH (Work From Home):' /> Marks remote work where users can manually input flexible In/Out times.</li>
                        <li><Title text='WFH + Leave:' /> Marks a day as Half Work From Home and Half Leave. Users select the leave half; the system records the other half as WFH.</li>
                        <li><Title text='WFC (Work From Client):' /> Marks work at a client location where users can manually input In/Out times to reflect hours accurately.</li>
                        <li><Title text='WFC + Leave:' /> Marks a day as Half Work From Client and Half Leave. Users select the leave half while the system records the other half as WFC.</li>
                        <li><Title text='Leave:' /> Apply full or half-day leave where for half-day leave, a punch button appears to record In/Out times for the working half.
                        <ImageCard src={images.adminAttendanceEditStatus} /></li>
                </ul>
            </>
            } />
        </>
    )
}

export default EditAttendanceStatus