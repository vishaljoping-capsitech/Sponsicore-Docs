import { Col, Image, Input, Row, Typography } from 'antd';
import React from 'react'
import { images } from '../assets';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/ThemeSlice';
import { AppDispatch, RootState } from '../redux/Store';

const TopHeader: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const mode = useSelector((state: RootState) => state.theme.mode);
    return (
        <Row justify="space-between" align={'middle'} style={{ borderBottom: "1px solid #EBEAF1" }}>
            <Col>
                <Row align='middle'>
                    <Col>
                        <Image style={{ borderRight: "1px solid #CFCBDC", width: 185 }} className='pr-3 mr-3' src={mode === "light" ? images.logo : images.logoDark} preview={false} />
                    </Col>
                    <Typography.Text className="text-xl font-medium">Docs</Typography.Text>
                </Row>
            </Col>
            <Col className='search-bar'>
                <Input className='text-md' prefix={<SearchOutlined className='mr-2' />} placeholder="Search..." style={{ borderRadius: 8 }} />
            </Col>
            <Col onClick={() => dispatch(toggleTheme())} className='cursor-pointer'>
                <Image src={mode === "light" ? images.darkMode : images.lightMode} preview={false} />
            </Col>
        </Row>
    )
}

export default TopHeader;