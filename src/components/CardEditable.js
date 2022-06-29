import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import SaveButton from './SaveButton'
import InputText from './InputText'
import getCardData from '../selector/card.selector'
import avatarSelector from '../selector/avatar.selector'
import usernameSelector from '../selector/username.selector'
import emailSelector from '../selector/email.selector'
import streetSelector from '../selector/street.selector'
import citySelector from '../selector/city.selector'

const CardEditable = () => {
  const { avatar, username, email, street, city } = useRecoilValue(getCardData)
  //
  const setAvatar = useSetRecoilState(avatarSelector)
  const setUsername = useSetRecoilState(usernameSelector)
  const setEmail = useSetRecoilState(emailSelector)
  const setStreet = useSetRecoilState(streetSelector)
  const setCity = useSetRecoilState(citySelector)
  //
  return (
    <div className="card">
      <div className='spacer'>
        <label>Avatar</label>
        <InputText value={avatar} onChange={setAvatar} />
      </div>
      <div className='spacer'>
        <label>Username</label>
        <InputText value={username} onChange={setUsername}/>
        <label>Email</label>
        <InputText value={email} onChange={setEmail}/>
      </div>
      <div className='spacer'>
        <label>Street</label>
        <InputText value={street} onChange={setStreet}/>
        <label>City</label>
        <InputText value={city} onChange={setCity}/>
      </div>
      <div className='spacer'>
        <SaveButton/>
      </div>
    </div>
  )
}

export default CardEditable
