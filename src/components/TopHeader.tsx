import { Col, Image, Input, Row, Typography } from 'antd';
import React from 'react'
import { images } from '../assets';
import { SearchOutlined } from '@ant-design/icons';

interface TopHeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopHeader: React.FC<TopHeaderProps> = ({ isDarkMode,setIsDarkMode}) => {
    return (
        <Row className={`${isDarkMode ? "dark-mode-bg" : "bg-white"} p-4`} justify="space-between" align={'middle'} style={{ borderBottom: isDarkMode ? "1px solid #4C3B63" : "1px solid #EBEAF1" }}>
            <Col>
                <Row align='middle'>
                    <Col style={{ borderRight: "1px solid #CFCBDC" }} className='pr-3 mr-4'>
                        <Image src={isDarkMode ? images.logoDark : images.logo} preview={false} />
                    </Col>
                    <Typography.Text className={`text-xl font-medium ${isDarkMode ? "text-color-darkmode" : "text-color"}`}>Docs</Typography.Text>
                </Row>
            </Col>
            <Col className='search-bar'>
                <Input className={`${isDarkMode ? "dark" : ""}`} prefix={<SearchOutlined className='mr-2' style={{ color: '#625982' }} />} placeholder="Search..." style={{ backgroundColor: isDarkMode ? '#261E33' : '#F4f5fa', borderRadius: 8, border: isDarkMode ?  '1px solid #4C3B63' : '1px solid #EBEAF1' }} />
            </Col>
            <Col onClick={() => setIsDarkMode(!isDarkMode)} className='cursor-pointer'>
                {
                    isDarkMode ? <Image src={images.lightMode} preview={false} /> : <Image src={images.darkMode} preview={false} />
                }
            </Col>
        </Row>
    )
}

export default TopHeader;