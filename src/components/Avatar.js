import React from 'react'
import { useRecoilValue } from 'recoil'
import avatarSelector from '../selector/avatar.selector'

const Avatar = () => {
  const avatar = useRecoilValue(avatarSelector)
  return (
    <div className='spacer'>
      <img src={avatar} alt=""/>
    </div>
  )
}

export default Avatar
