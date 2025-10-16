import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"

const EmployeeDuplicateTravel = () => {
    return (
        <>
            <Paragraph
                text={
                    <>
                        <ul>
                            <li>Only one travel request is allowed per traveller for a specific date.</li>
                            <li>This prevents duplicate bookings and scheduling conflicts.</li>
                            <li>If a new request is needed, the existing one must be cancelled or modified first.</li>
                            <li>The rule applies to all types of travel (domestic/international) and all transport modes.
                                <ImageCard src={images.empTravelMultipleTravellersSameDate} /></li>
                        </ul>
                    </>
                } />
        </>
    )
}

export default EmployeeDuplicateTravel