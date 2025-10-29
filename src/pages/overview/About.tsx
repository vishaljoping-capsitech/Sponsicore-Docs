import SubHeading from "../../components/SubHeading";
import { images } from '../../assets'
import Paragraph from '../../components/Paragraph'
import { Image } from 'antd'

const About = () => {
    return (
        <>
        <SubHeading text="What is Sponsicore ?"/>
            <Paragraph text="Sponsicore is an intelligent compliance management platform designed to help businesses efficiently manage data across every stage of the sponsorship lifecycle. By shifting the burden from people to systems, it delivers a seamless, stress-free experience freeing up valuable resources while maintaining complete compliance and data integrity.Whether you're a small business sponsoring a few employees or a large enterprise managing hundreds, Sponsicore equips you with the tools to stay compliant, organized, and in control in every step of the way." />
            <Image src={images.overviewSponsicore} className="mt-5 mb-5"/>
        </>
    )
}

export default About