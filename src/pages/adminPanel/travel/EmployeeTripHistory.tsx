import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const EmployeeTripHistory = () => {
    return (
        <>
        <SubHeading text="Trip History" />
            <Paragraph
                text={
                    <>
                        Users can access the Employee Trip History by clicking the dedicated button. This feature allows users to:
                        <ul className="docs-list">
                            <li>View a list of all employees along with their total number of trips</li>
                            <li>Identify employees currently on a trip today, highlighted for quick visibility</li>
                            <li>Gain quick insights into ongoing travel activities across the organization</li>
                            <li>Monitor employee travel patterns for reporting or planning purposes</li>
                            This feature provides a clear and real-time overview of employee travel history and current trips, helping in better travel oversight and management.
                            <ImageCard src={images.adminTravelTripHistory} />
                        </ul>
                    </>
                } />
        </>
    )
}

export default EmployeeTripHistory