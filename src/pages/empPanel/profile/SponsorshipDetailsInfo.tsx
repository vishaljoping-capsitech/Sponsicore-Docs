import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const SponsorshipDetails = () => {
  return (
    <>
      <Paragraph 
        text={
          <>
            <ul>
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