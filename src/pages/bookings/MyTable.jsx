import { Table } from 'antd'
import React, { useEffect } from 'react'
import axios from '../../api/axios'

const MyTable = ({ columns, data, id, setData, host }) => { 
  const getData = async () => {
    const response = await axios.post(
      `/api/bookings`, {
        id,
        host
      }
    )
    setData(() => {
      const newState = response.data.rows.map((row, indx) => {
        return {
          key: row.id,
          host: row.hostUser.firstname + ' ' + row.hostUser.lastname,
          hosted: row.hostedUser.firstname + ' ' + row.hostedUser.lastname,
          status: row.status
        }
      })
      return newState;
    })
  }

  useEffect(() => {
    console.log('%c My log', 'color: orange; font-weight: bold')
    console.log('yoo')
    getData()
  }, [host])

  return (
    <div>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default MyTable