import { atom } from 'recoil'

const avatarAtom = atom({
  key: 'avatarAtom',
  default: 'https://ionicframework.com/docs/icons/logo-react-icon.png'
})

export default avatarAtom
