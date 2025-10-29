import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"

const SponsorshipDetails = () => {
  return (
    <>
      <SubHeading text="Sponsorship Details" className="margin-top-point-5rem"/>
      <Paragraph 
        text={
          <>
            <ul className="docs-list">
              <li>For sponsored employees, this section displays detailed sponsorship information, including sponsor name, visa type, and validity details.</li>
              <li>This section is visible only to sponsored employees.</li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empProfileSponsorshipDetails} />
    </>
  )
}

export default SponsorshipDetails