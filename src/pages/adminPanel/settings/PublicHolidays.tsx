import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"

const PublicHolidays = () => {
    return (
        <>
            <Paragraph text={<>
                <ul>
                    <li id="add-holiday"><Title text="Add Holidays:" /> Users have the ability to add holidays that can span a single day or multiple consecutive days. When adding a holiday, users can specify whether it applies to all employees across the organization or only to selected individuals, providing flexibility in holiday management. Additionally, holidays can only be scheduled for future dates to ensure proper planning and avoid conflicts with past records.
                    <ImageCard src={images.publicHoliday.add}/></li>
                    <li id="remove-holiday"><Title text="Remove Holidays:" /> Users can remove holidays that are planned for future dates if they are no longer applicable or need adjustment. However, once a holiday date has passed, it cannot be deleted, preserving historical data for attendance and record-keeping purposes.
                    <ImageCard src={images.publicHoliday.remove}/></li>
                </ul>
            </>} />
        </>
    )
}

export default PublicHolidays