import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'
import SubHeading from '../../../components/SubHeading'
import { sections } from './LeaveSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const EmployeeLeave = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text='Leaves' />
                    <Paragraph text='Employees can manage their leave applications by adding, editing, canceling, or deleting them, with edits and deletions allowed only when the leave status is pending. Cancellation offers both partial (for multi-day leaves) and full options but cannot be applied to past leave days. Automated emails notify employees of any admin actions taken on their requests. Various filters are available to easily view leave applications, and employees can click the status button to see detailed information about their leave.' />
                    <ImageCard src={images.empLeavePanel} />
                    <SubHeading
                        text={
                            <ol>
                                {sections.map((item, index) => (
                                    <li key={index} id={item.id}>
                                        {item.title}
                                        {item.component ? React.createElement(item.component) : null}
                                    </li>
                                ))}
                            </ol>
                        } />
                </Col>
            </Row>
        </>
    )
}
EmployeeLeave.getAnchorItems = () => generateAnchorItems(sections);
export default EmployeeLeave