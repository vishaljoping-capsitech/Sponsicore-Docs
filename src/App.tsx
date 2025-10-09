import React, { useState } from 'react'
import MainLayout from './pages/MainLayout';
import { ConfigProvider, theme } from 'antd';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, }}>
      <MainLayout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    </ConfigProvider>
  )
}

export default App;