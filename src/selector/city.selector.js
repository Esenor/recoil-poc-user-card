import { selector } from 'recoil'
import address from '../atom/address.atom'

const citySelector = selector({
  key: 'citySelector',
  get: ({ get }) => get(address).city,
  set: ({ set, get }, onChangeEvent) => {
    const addressData = get(address)
    set(address, {
      ...addressData,
      city: onChangeEvent.target.value
    })
  }
})

export default citySelector
