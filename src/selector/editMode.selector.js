import { selector } from 'recoil'
import editModeAtom from '../atom/editMode.atom'

const editModeSelector = selector({
  key: 'editModeSelector',
  get: ({get}) => get(editModeAtom),
  set: ({set, get}, isEnable = false) => {
    if (get(editModeAtom) !== isEnable) {
      set(editModeAtom, isEnable)
    }
  }
})

export default editModeSelector
