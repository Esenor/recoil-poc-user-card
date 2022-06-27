import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import editModeSelector from '../selector/editMode.selector'
import loadingModeSelector from '../selector/loadingMode.selector'
import Loader from './Loader'

const SaveButton = () => {
  const setEditMode = useSetRecoilState(editModeSelector)
  const [isLoading, setLoadingMode] = useRecoilState(loadingModeSelector)
  const onClick = () => {
    setLoadingMode(true)
    setTimeout(() => {
      setLoadingMode(false)
      setEditMode(false)
    }, 1000)
  }

  return (
    <div className='spacer'>
      {
        isLoading
          ? <Loader/>
          : <button onClick={onClick}>Save</button>
      }
    </div>
  )
}

export default SaveButton
