import { selector } from 'recoil'
import loadingModeAtom from '../atom/loadingMode.atom'

const loadingModeSelector = selector({
  key: 'loadingModeSelector',
  get: ({ get }) => get(loadingModeAtom),
  set: ({ set, get }, isEnable = false) => {
    if (get(loadingModeAtom) !== isEnable) {
      set(loadingModeAtom, isEnable)
    }
  }
})

export default loadingModeSelector
