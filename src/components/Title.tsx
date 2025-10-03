import { Typography } from 'antd'
import React from 'react'

interface TitleProps {
    text: string;
    className?: string;
}

const Title:React.FC<TitleProps> = ({text, className}) => {
  return (
    <Typography.Text className={`theme-color font-semibold ${className}`}>{text}</Typography.Text>
  )
}

export default Title