import { selector } from 'recoil'
import customer from '../atom/customer.atom'

const emailSelector = selector({
  key: 'emailSelector',
  get: ({get}) => get(customer).email,
  set: ({set, get}, onChangeEvent) => {
    const customerData = get(customer)
    set(customer, {
      ...customerData, 
      email: onChangeEvent.target.value
    })
  }
})

export default emailSelector
