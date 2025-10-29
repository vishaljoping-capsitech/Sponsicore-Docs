import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import { sections } from './CompanySection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const Company = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text={'Company'} />
                    <Paragraph text={"The Admin Control section, available only to administrators, allows full management of company profiles, documents, and mandatory uploads (up to 10 MB). Through Branch Management, admins can add, edit, activate, deactivate, or remove branches, while the main branch remains protected. New branches can inherit main branch settings, and inactive ones are view-only. In Officer & Feature Management, admins assign officers and enable or disable company features as needed. The Subscription section displays key company and subscription details, including invoices, payment status, and downloadable records."} />
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
Company.getAnchorItems = () => generateAnchorItems(sections)
export default Company