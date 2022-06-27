import React from 'react'
import { useRecoilValue } from 'recoil'
import formatedAddressSelector from '../selector/formatedAddress.selector'

const Address = () => {
  const formatedAddres = useRecoilValue(formatedAddressSelector)
  return (
    <div className='spacer'>
      <div>{formatedAddres}</div>
    </div>
  )
}

export default Address
