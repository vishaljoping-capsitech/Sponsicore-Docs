import React from 'react'
import MainLayout from './pages/MainLayout';
import { ConfigProvider } from 'antd';
import ThemeProvider from './context/ThemeProvider';
import { useSelector } from 'react-redux';
import { RootState } from './redux/Store';

const MyApp: React.FC = () => {

  const config = useSelector((state: RootState) => state.theme.config);
  return (
    <ConfigProvider theme={config}>
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default MyApp;