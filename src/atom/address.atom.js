import { atom } from 'recoil'

const addressAtom = atom({
  key: 'addressAtom',
  default: {
    street: '4 rue toto',
    city: 'Fooo'
  }
})

export default addressAtom
