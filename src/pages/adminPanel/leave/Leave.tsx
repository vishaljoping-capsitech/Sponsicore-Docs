import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import SubHeading from '../../../components/SubHeading'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'
import { sections } from './LeaveSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'
import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'

const Leave = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text={'Leave'} />
          <Paragraph text={
            <>
              <ul>
                <li>Quickly <Title text={'browse and filter recent and upcoming leave applications'}></Title> with intuitive leave-type categories and clear visual indicators for pending requests.</li>
                <li>Admins can <Title text={'seamlessly approve or reject leave requests'}></Title>, triggering instant email notifications—actions are final to ensure smooth, reliable leave management.</li>
                <li style={{listStyleType:"none"}}><ImageCard src={images.adminLeave} /></li>
              </ul>
            </>
          } />
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
Leave.getAnchorItems = () => generateAnchorItems(sections)
export default Leave