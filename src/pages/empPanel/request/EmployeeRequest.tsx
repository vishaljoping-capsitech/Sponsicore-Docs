import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import { sections } from './RequestSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const EmployeeRequest = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text='Requests' />
                    <Paragraph text="The system streamlines employee management by handling various requests, including personal detail updates, client meeting permissions, WFH or client site work, attendance corrections, missing cards, unauthorized absences, and other custom requests. Requests from the past 10 days and upcoming ones are displayed, with interactive bricks serving as filters and red dots highlighting pending actions. Authorized users can approve or reject requests via the status button, after which requests become view-only, and automated emails notify employees of the decision." />
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
EmployeeRequest.getAnchorItems = () => generateAnchorItems(sections);
export default EmployeeRequest