import { Typography } from 'antd'
import React from 'react'

interface TitleProps {
    text: string;
}

const Title:React.FC<TitleProps> = ({text}) => {
  return (
    <Typography.Text className='theme-color font-semibold'>{text}</Typography.Text>
  )
}

export default Title