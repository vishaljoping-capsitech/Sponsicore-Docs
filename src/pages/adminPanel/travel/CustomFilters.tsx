import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const CustomFilters = () => {
    return (
        <>
        <SubHeading text="Custom Filters" />
            <Paragraph text="A robust filtering system allows users to customize travel data views efficiently. Filters include a search filter for travel title, date filter, and options for trip type, trip status, and request type. This enables quick sorting, better organization, and easy access to relevant travel information, with a user-friendly interface designed for seamless navigation."/>
            <ImageCard src={images.adminTravelCustomFilters} />
        </>
    )
}

export default CustomFilters