import { Menu } from 'antd'
import '../css/common.css'
import React from 'react'

const items = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 1',
  },
  {
    key: '3',
    label: 'Item 1',
  },
  {
    key: '4',
    label: 'Item 1',
  },
  {
    key: '5',
    label: 'Item 1',
  },
  {
    key: '6',
    label: 'Item 1',
  },
  {
    key: '7',
    label: 'Item 1',
  },
  {
    key: '8',
    label: 'Item 1',
  },
  {
    key: '9',
    label: 'Item 1',
  },
  {
    key: '10',
    label: 'Item 1',
  },
  {
    key: '11',
    label: 'Item 1',
  },
  {
    key: '12',
    label: 'Item 1',
  },
  {
    key: '13',
    label: 'Item 1',
  },
  {
    key: '14',
    label: 'Item 1',
  },
  {
    key: '15',
    label: 'Item 1',
  },
  {
    key: '16',
    label: 'Item 1',
  },
  {
    key: '17',
    label: 'Item 1',
  },
  {
    key: '18',
    label: 'Item 1',
  },
  {
    key: '19',
    label: 'Item 1',
  },
]


const SideBar: React.FC = () => {
  return (
    <>
      <Menu className='ant-layout-main-content scrollable' items={items}></Menu>
    </>
  )
}

export default SideBar