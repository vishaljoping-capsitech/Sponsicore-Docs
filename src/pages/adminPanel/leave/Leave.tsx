import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
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
          <Paragraph text={"Leave applications from the past 10 days and all future requests are displayed, with users able to filter and browse by leave type, represented as interactive bricks that highlight pending requests. Authorized admins can approve or reject requests via the status button, with actions final and triggering automated email notifications to employees."} />
          <ImageCard src={images.adminLeave} />
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
Leave.getAnchorItems = () => generateAnchorItems(sections)
export default Leave