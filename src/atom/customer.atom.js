import { atom } from 'recoil'

const customerAtom = atom({
  key: 'customerAtom',
  default: {
    username: 'Lorem Ipsum',
    email: 'lorem.i@gmail.com'
  }
})

export default customerAtom
