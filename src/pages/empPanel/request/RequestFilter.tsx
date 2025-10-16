import Paragraph from '../../../components/Paragraph'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'

const RequestFilter = () => {
    return (
        <>
            <Paragraph text="A variety of filters are introduced to help users easily view and manage requests based on different criteria. To make navigation intuitive, requests are categorized by their type and displayed as clickable bricks. These bricks not only provide a clear visual summary of each request category but also serve as filters—allowing users to quickly select and view requests belonging to a specific type. This approach enhances usability by simplifying the process of tracking, reviewing, and responding to different kinds of employee requests efficiently." />
            <ImageCard src={images.empRequestFilter} />
        </>
    )
}

export default RequestFilter