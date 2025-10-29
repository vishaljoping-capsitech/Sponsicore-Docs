import Paragraph from '../../../components/Paragraph'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'
import SubHeading from '../../../components/SubHeading'

const RequestFilter = () => {
    return (
        <>
        <SubHeading text="Filter Requests" />
            <Paragraph text="A set of intuitive filters allows users to manage requests efficiently. Requests are grouped by type and displayed as clickable bricks that both summarize the category and act as filters, enabling quick selection and streamlined tracking, review, and response to employee requests." />
            <ImageCard src={images.empRequestFilter} />
        </>
    )
}

export default RequestFilter