import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const Subscription = () => {
    return (
        <>
            <Paragraph text={
                <>
                    The <Title text={"Subscription"} /> section provides a clear snapshot of your company's key details and billing information in one place. At first, you'll see your company logo, ID, VAT and license numbers, along with contact info for quick reference. After that, your current subscription plan is displayed—including status, employee limits, and validity dates so that you can easily track usage and renew on time. All invoices are listed in a detailed table with payment status, amount, and download options, while active payment links make it easy to complete pending payments. Smart filters help you sort invoices by date, status, or user, making it simple to manage billing records efficiently. The layout is clean, intuitive, and designed to keep all essential subscription data at your fingertips.
                </>
            } />
            <ImageCard src={images.adminCompanySubscription} />
        </>
    )
}

export default Subscription