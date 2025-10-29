import React from 'react';
import { Row, Col, Typography, Divider, Image } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { images } from '../assets';

const { Text } = Typography;

const Footer: React.FC = () => {
    const mode = useSelector((state: RootState) => state.theme.mode);

    return (
        <>
            <Divider size='small' style={{ margin: '30px 0 16px 0', backgroundColor: mode === 'dark' ? '#4C3B63' : '#EBEAF1' }} />
            <Row gutter={[16, 16]} justify="center" align="middle">
                <Col xs={24} sm={10} md={24} lg={24} xl={24} xxl={13}> 
                        <Image
                            className="pr-3 mr-3"
                            src={mode === "light" ? images.logo : images.logoDarkFooter}
                            preview={false}
                        />
                </Col>
                <Col xs={24} sm={8} md={24} lg={24} xl={12} xxl={6}>
                    <Row align="middle" wrap={false}>
                        <Image
                            src={mode === "light" ? images.mailLogoLight : images.mailLogoDark}
                            preview={false}
                        />
                        <Text className="ml-2">info@sponsicore.com</Text>
                    </Row>
                </Col>
                <Col xs={24} sm={6} md={24} lg={24} xl={12} xxl={5}>
                    <Row align="middle" wrap={false}>
                        <Image
                            src={mode === "light" ? images.callLogoLight : images.callLogoDark}
                            preview={false}
                        />
                        <Text className="ml-2">020 3835 4999</Text>
                    </Row>
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={24} className='pt-2' style={{ textAlign: 'left' }}>
                    <Text type="secondary" style={{ color: mode === 'dark' ? '#CFCCDC' : '#353046' }}>
                        © Copyright Sponsicore 2025 - All Rights Reserved
                    </Text>
                </Col>
            </Row>
        </>
    );
};

export default Footer;
