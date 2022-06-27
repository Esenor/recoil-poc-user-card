import React from 'react'
import { useRecoilValue } from 'recoil'
import customerSelector from '../selector/customer.selector'

const CustomerIdentity = () => {
  const { username, email } = useRecoilValue(customerSelector)
  return (
    <div className='spacer'>
      <div>{username}</div>
      <div>{email}</div>
    </div>
  )
}

export default CustomerIdentity
