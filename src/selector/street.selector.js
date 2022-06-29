import { selector } from 'recoil'
import address from '../atom/address.atom'

const streetSelector = selector({
  key: 'streetSelector',
  get: ({ get }) => get(address).street,
  set: ({ set, get }, onChangeEvent) => {
    const addressData = get(address)
    set(address, {
      ...addressData,
      street: onChangeEvent.target.value
    })
  }
})

export default streetSelector
