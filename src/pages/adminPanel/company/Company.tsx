import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import SubHeading from '../../../components/SubHeading'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'
import { sections } from './CompanySection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const Company = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text={'Company'} />
                    <Paragraph text={<ul>
                        <li><Title text={'Admin Control:'} /> Accessible only to Admins, this section allows full management of company profiles, documents (view, download, delete, history), and mandatory document uploads (up to 10MB).</li>
                        <li><Title text={'Branch Management:'} /> Admins can add, edit, activate/deactivate, or remove branches, with the main branch protected from changes. New branches can copy main branch settings, and inactive branches restrict users to view-only access.</li>
                        <li><Title text={'Officer & Feature Management:'} /> Admins manage officers with limits—one Authorizing Officer, one Level One Officer, and multiple Level Two Officers. All company features are listed with descriptions and toggles to activate or deactivate as needed.</li>
                        <li><Title text={'Subscription:'} /> It displays key company details, including logo, company ID, VAT number, license number, and contact information. It also includes current subscription information (period, allowed employees, and status), along with a filterable invoice table showing invoice details, payment status, and download actions.</li>
                    </ul>} />
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
Company.getAnchorItems = () => generateAnchorItems(sections)
export default Company