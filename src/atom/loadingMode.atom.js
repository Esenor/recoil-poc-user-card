import { atom } from 'recoil'

const loadingModeAtom = atom({
  key: 'loadingModeAtom',
  default: false
})

export default loadingModeAtom
