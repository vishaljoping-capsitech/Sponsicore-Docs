import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import Title from "../../../components/Title"
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const PayslipUpload = () => {
    return (
        <>
        <SubHeading text="Upload Payslip" />
            <Paragraph
                text={<ul className="docs-list">
                    <li><Title text={"Payslip Upload Options:"}></Title>Authorized users can upload payslips either individually or in bulk using a consolidated upload feature. This flexibility allows for efficient handling of payroll documents based on company needs.
                        <ImageCard src={images.adminReportsPayslipUploadType} /></li>
                    <li><Title text={"Employee ID Naming Requirement:"}></Title>To ensure accurate matching, each payslip file must be named with the corresponding employee ID. This enables the system to automatically assign the payslips correctly once the user selects the payment month and uploads the files.
                        <ImageCard src={images.adminReportsPayslipIDMatch} /></li>
                </ul>} />
        </>
    )
}

export default PayslipUpload