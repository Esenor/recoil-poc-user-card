import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import Card from './components/Card'
import CardEditable from './components/CardEditable'
import editModeSelector from './selector/editMode.selector'

const App = () => {
  const isEditable = useRecoilValue(editModeSelector)
  return (
    <div className="App">
      { isEditable ? <CardEditable/> : <Card/> }
    </div>
  )
}

const AppWrapper = () => {
  return (
    <RecoilRoot>
      <App/>
    </RecoilRoot>
  )
}

export default AppWrapper
