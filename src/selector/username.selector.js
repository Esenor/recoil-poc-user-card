import { selector } from 'recoil'
import customer from '../atom/customer.atom'

const usernameSelector = selector({
  key: 'usernameSelector',
  get: ({get}) => get(customer).username,
  set: ({set, get}, onChangeEvent) => {
    const customerData = get(customer)
    set(customer, {
      ...customerData, 
      username: onChangeEvent.target.value
    })
  }
})

export default usernameSelector
