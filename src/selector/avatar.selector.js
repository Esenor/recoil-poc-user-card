import { selector } from 'recoil'
import avatarAtom from '../atom/avatar.atom'

const avatarSelector = selector({
  key: 'avatarSelector',
  get: ({ get }) => get(avatarAtom),
  set: ({ set }, onChangeEvent) => {
    set(avatarAtom, onChangeEvent.target.value)
  }
})

export default avatarSelector
