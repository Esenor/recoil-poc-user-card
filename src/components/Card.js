import React from 'react'
import EditButton from './EditButton'
import Avatar from './Avatar'
import CustomerIdentity from './CustomerIdentity'
import Address from './Address'

const Card = () => {
  return (
    <div className="card">
      <Avatar/>
      <CustomerIdentity/>
      <Address/>
      <EditButton/>
    </div>
  )
}

export default Card
