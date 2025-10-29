import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import { sections } from './RequestSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const AdminRequest = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text='Request' />
                    <Paragraph text="The system streamlines employee request management by supporting various request types, including address or bank updates, client meetings, attendance corrections, missing cards, work from home or client site, unauthorized absences, and other custom requests. Requests from the past 10 days and upcoming ones are displayed, with interactive request-type bricks serving as filters and showing a red dot for pending actions. Authorized users can approve or reject requests via the status button, after which the request becomes view-only, and an automated email is sent to the employee confirming the action." />
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
AdminRequest.getAnchorItems = () => generateAnchorItems(sections);
export default AdminRequest