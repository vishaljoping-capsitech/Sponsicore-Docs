import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from '../../../components/SubHeading'
const ProfileOverview = () => {
    return (
        <>
        <SubHeading text="Profile Overview" className="margin-top-point-5rem"/>
            <Paragraph text={
                <>
                    The <Title text="Profile" /> section presents essential company information such as the company name, license number, VAT number, and contact details in a clear and organized layout. Admins have access to an <Title text="Edit" /> option that enables them to easily update the company&pos;s address and other important details. This streamlined editing process ensures that all company information remains accurate and up-to-date with minimal effort.
                </>
            } />
            <ImageCard src={images.adminCompanyProfile} />
        </>
    )
}

export default ProfileOverview