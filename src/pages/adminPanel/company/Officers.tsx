import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const Officers = () => {
    return (
        <>
            <Paragraph
                text={<ul>
                    <li><Title text={"Authorizing Officer:"} />
                        This is the highest-ranking officer in the company and there can only be one. The Authorizing Officer holds the ultimate authority for approvals and critical decisions, ensuring centralized leadership and clear accountability at the top.</li>
                    <li><Title text={"Level One Officer:"} />
                        Only one individual can serve as the Level One Officer. Acting as the key operational lead, this officer bridges high-level strategy and day-to-day execution. They often coordinate closely with the Authorizing Officer and ensure that major directives are carried out efficiently.</li>
                    <li><Title text={"Level Two Officers:"} />
                        Multiple individuals can hold the Level Two Officer position. These officers are responsible for managing specific departments or functions, providing specialized oversight, and supporting the company’s strategic goals. This structure allows for effective delegation and operational depth across the organization.
                        <ImageCard src={images.adminCompanyOfficers} /></li>
                </ul>} />

        </>
    )
}

export default Officers