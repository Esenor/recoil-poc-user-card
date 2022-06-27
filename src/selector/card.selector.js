import { selector } from 'recoil'
import addressAtom from '../atom/address.atom'
import avatarAtom from '../atom/avatar.atom'
import customerAtom from '../atom/customer.atom'

const cardSelector = selector({
  key: 'cardSelector',
  get: ({get}) => {
    const avatar = get(avatarAtom)
    const customer = get(customerAtom)
    const address = get(addressAtom)

    return {
      avatar,
      username: customer.username,
      email: customer.email,
      street: address.street,
      city: address.city
    }
  }
})

export default cardSelector
