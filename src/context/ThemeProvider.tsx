import {theme } from 'antd';
import { createContext, useContext } from 'react'
const { useToken } = theme;

const ThemeContext = createContext<any>(null)
ThemeContext.displayName = 'ThemeContext'


export const useCustomTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('Theme must be used within a ThemeProvider')
    }
    return context
}


const ThemeProvider = ({ children }: any) => {

    const { token } = useToken();

    return <ThemeContext.Provider value={{ token }}>
        {children}
    </ThemeContext.Provider>
}


export default ThemeProvider