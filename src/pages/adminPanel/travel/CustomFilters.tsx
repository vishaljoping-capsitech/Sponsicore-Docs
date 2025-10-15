import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const CustomFilters = () => {
    return (
        <>
            <Paragraph text="A comprehensive set of filters has been implemented to enable precise data visualization, with filters applied to key parameters including travel dates, travel title, employee trip history, trip status, trip type, and request status. This approach facilitates efficient sorting and enhanced organization of travel-related information, allowing users to customize their views to highlight the most pertinent data points. Additionally, the filtering system is designed with user-friendly functionality to ensure ease of use across all levels."/>
            <ImageCard src={images.adminTravelCustomFilters} />
        </>
    )
}

export default CustomFilters