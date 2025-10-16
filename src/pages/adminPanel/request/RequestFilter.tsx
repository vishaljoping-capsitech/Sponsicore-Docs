import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'

const RequestFilter = () => {
    return (
        <>
            <Paragraph text={<>
                <ul>
                    <li><Title text="Request Display Range:" /> By default, the system shows employee requests from the last 10 days along with all upcoming (future-dated) requests. This ensures recent and relevant requests are always visible. Users can further refine the view using available filters for easier tracking and management.</li>
                    <li><Title text="Request Categorization as Bricks:" /> All requests are grouped based on their type and visually displayed as individual "bricks." These bricks not only categorize the requests but also serve as clickable filters, allowing users to quickly view requests of a specific type with a single click.<ImageCard src={images.adminRequestFilter}/></li>
                </ul>

            </>} />
        </>
    )
}

export default RequestFilter