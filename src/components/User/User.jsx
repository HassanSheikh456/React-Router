import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams()
  return (
    <div className='bg-gray-700 text-2xl text-white p-3'>
      User: {userid}
    </div>
  )
}

export default User
