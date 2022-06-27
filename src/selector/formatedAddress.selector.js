import { selector } from 'recoil'
import addressAtom from '../atom/address.atom'

const formatedAddressSelector = selector({
  key: 'formatedAddressSelector',
  get: ({get}) => `${get(addressAtom).street}, ${get(addressAtom).city}`
})

export default formatedAddressSelector
