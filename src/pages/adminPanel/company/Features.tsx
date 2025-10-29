import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const Features = () => {
    return (
        <>
        <SubHeading text="Features"/>
            <Paragraph text={
                <>
                    The <Title text={"Features"} /> section displays all available modules for company in a simple, organized layout. Each feature comes with a brief description and a checkbox to indicate whether it's currently active or inactive. From managing employee data and attendance to handling tasks, travel, emails, and reminders, this section gives full control to enable only the tools a company needs - making the platform flexible, efficient, and tailored to workflow.
                </>
            } />
            <ImageCard src={images.adminCompanyFeatures} />
        </>
    )
}

export default Features