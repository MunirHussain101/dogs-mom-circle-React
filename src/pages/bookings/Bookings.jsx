import { Tabs, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyTable from './MyTable'

const Bookings = () => {
  const { id } = useParams()
  const columns = [
    {
      title: 'Host',
      dataIndex: 'host',
      key: 'host',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Hosted',
      dataIndex: 'hosted',
      key: 'hosted',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => {
        let color = 'geekblue'
        if(status === 'completed') color = 'green'
        const statusText = status.toUpperCase()
        return (
          <Tag color={color} key={status}>
            {statusText}
          </Tag>
        )
      }
    },
  ];
  const [data, setData] = useState([])
  const [host, setHost] = useState(false)
  const items = [
    {
      key: '1',
      label: `Boarding`,
      children: <MyTable columns={columns} data={data} setData={setData} id={id} host={host}/>
    },
    {
      key: '2',
      label: `Hosting`,
      children: <MyTable columns={columns} data={data} setData={setData} id={id} host={host}/>
    },
  ];
  // const getData = async () => {
  //   const response = await axios.post(
  //     `/api/bookings`, {
  //       id,
  //       host
  //     }
  //   )
  //   setData(() => {
  //     const newState = response.data.rows.map((row, indx) => {
  //       return {
  //         key: row.id,
  //         host: row.hostUser.firstname + ' ' + row.hostUser.lastname,
  //         hosted: row.hostedUser.firstname + ' ' + row.hostedUser.lastname,
  //         status: row.status
  //       }
  //     })
  //     return newState;
  //   })
  // }
  return (
    <div>
      <h1>Bookings</h1>
      <Tabs
        defaultActiveKey='1'
        items={items}
        onChange={(key) => {
          console.log(key)
          if(key === '1') return setHost(false)
          setHost(true)
        }}
        id={id}
      />
    </div>
  )
}

export default Bookings