import { Col, Image, Row, Typography } from 'antd';
import React from 'react'
import { images } from '../assets';

const TopHeader: React.FC = () => {
    return (
        <Row className='bg-white mx-2 my-2 py-2 px-4 rounded-md docs-shadow' justify="space-between" align={'middle'}>
            <Col>
                <Row align='middle'>                    
                    <Image height={45} src={images.logo} preview={false} />
                </Row>
            </Col>
            <Typography.Text className='text-xl font-medium theme-color'>Documentation</Typography.Text>
        </Row>
    )
}

export default TopHeader;