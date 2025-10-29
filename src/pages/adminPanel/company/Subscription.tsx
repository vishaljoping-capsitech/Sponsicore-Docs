import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const Subscription = () => {
    return (
        <>
        <SubHeading text="Subscription"/>
            <Paragraph text={
                <>
                    This section provides a complete overview of company and billing details, including logo, ID, VAT and license numbers, and contact info. It displays the current subscription plan with status, employee limits, and validity, while all invoices are shown in a filterable table with payment status, amounts, and download options. Active payment links and smart filters make managing and completing payments quick and efficient, all within a clean, intuitive interface.
                </>
            } />
            <ImageCard src={images.adminCompanySubscription} />
        </>
    )
}

export default Subscription