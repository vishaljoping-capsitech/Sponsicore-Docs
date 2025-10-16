import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'
import { sections } from './RequestSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const AdminRequest = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text='Request' />
                    <Paragraph text="To streamline employee management and improve workflow efficiency, the system provides a structured approach to handling various employee requests. These include updates to personal details (like address or bank information), permissions for client meetings, work from home or client site, attendance corrections, missing card entries, unauthorized absences, and other custom requests. The interface displays requests from the past 10 days along with all upcoming ones, with filters available for quick sorting. Each request type appears as an interactive brick that doubles as a filter, with a red dot indicating pending actions. Authorized users can approve or reject requests using the status button—once actioned, the request becomes view-only. An automated email is also sent to the employee, confirming the admin's decision and maintaining clear communication." />
                    <SubHeading
                        text={
                            <>
                                <ol>
                                    {sections.map((item, index) => (
                                        <li key={index} id={item.id}>
                                            {item.title}
                                            {item.component ? React.createElement(item.component) : null}
                                        </li>
                                    ))}
                                </ol>
                            </>
                        }
                    />
                </Col>
            </Row>
        </>
    )
}
AdminRequest.getAnchorItems = () => generateAnchorItems(sections);
export default AdminRequest