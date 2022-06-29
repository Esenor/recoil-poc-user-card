import { selector } from 'recoil'
import customerAtom from '../atom/customer.atom'

const getCustomer = selector({
  key: 'customerSelector',
  get: ({ get }) => get(customerAtom)
})

export default getCustomer
