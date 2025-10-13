import { Typography } from 'antd'
import React from 'react'

interface TitleProps {
    text: string;
    isDarkMode : boolean;
    className?: string;
}

const Title:React.FC<TitleProps> = ({text, className}) => {
  return (
    <Typography.Text className={`font-semibold ${className}`}>{text}</Typography.Text>
  )
}

export default Title