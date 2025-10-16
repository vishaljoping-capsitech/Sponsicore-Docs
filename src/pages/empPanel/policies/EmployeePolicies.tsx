
import Heading from '../../../components/Heading'
import { Col, Row } from 'antd'
import Paragraph from '../../../components/Paragraph'
import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'
import { sections } from './PolicySection'


const EmployeePolicies = () => {
    return (
        <Row justify="center" gutter={64}>
            <Col xl={24}>
                <Heading id='policies' text='Policies' />
                <Paragraph text='Policies serve as essential guidelines that employees are expected to follow to ensure smooth and consistent operations within the company. Employees have easy access to view all policies uploaded by the admin, helping them stay informed and aligned with organizational expectations. While a sample screenshot is provided for reference, please note that each company may have its own unique set of policies tailored to their specific requirements. This flexibility ensures that the platform can adapt to diverse business needs while keeping employees well-informed and compliant.' />
                <ImageCard src={images.empPolicies} />
            </Col>
        </Row>
    )
}
EmployeePolicies.getAnchorItems = () => generateAnchorItems(sections);
export default EmployeePolicies