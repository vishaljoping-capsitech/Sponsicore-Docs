import { Typography } from 'antd'
import React from 'react'

interface TitleProps {
    text: string;
    className?: string;
    id?: string;
}

const Title:React.FC<TitleProps> = ({text, id, className}) => {
  return (
    <Typography.Text id={id} className={`font-semibold text-base ${className}`}>{text}</Typography.Text>
  )
}

export default Title;