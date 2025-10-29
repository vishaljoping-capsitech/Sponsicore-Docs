import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'
import { sections } from './LeaveSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const EmployeeLeave = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text='Leaves' />
                    <Paragraph text='Employees can add, edit, cancel, or delete leave applications while the status is pending. Cancellations can be full or partial for multi-day leaves but are not allowed for past dates. Automated email notifications inform employees of admin actions, and filters along with the Status button provide quick access to detailed leave information.' />
                    <ImageCard src={images.empLeavePanel} />
                    {sections.map((item) => (
                        <Row id={item.id}>
                            {item.component ? React.createElement(item.component) : null}
                        </Row>
                    ))}
                </Col>
            </Row>
        </>
    )
}
EmployeeLeave.getAnchorItems = () => generateAnchorItems(sections);
export default EmployeeLeave