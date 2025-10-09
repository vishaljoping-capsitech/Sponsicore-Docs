import { Typography } from 'antd'
import React from 'react'

interface TitleProps {
    text: string;
    isDarkMode : boolean;
    setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

const Title:React.FC<TitleProps> = ({text, className, isDarkMode}) => {
  return (
    <Typography.Text className={`${isDarkMode ? "text-color-darkmode" : "theme-color"} font-semibold ${className}`}>{text}</Typography.Text>
  )
}

export default Title