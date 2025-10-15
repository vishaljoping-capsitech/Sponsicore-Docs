import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const ReportReminder = () => {
    return (
        <>
            <Paragraph text="Authorized users can easily configure this feature by choosing specific reports and their recipients, enabling automatic monthly email delivery on the first day. This ensures that everyone stays informed with the latest reports effortlessly and on schedule."
            />
            <ImageCard src={images.adminReportReminder} />
        </>
    )
}

export default ReportReminder