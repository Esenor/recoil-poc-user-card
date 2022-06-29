import React from 'react'
import { string, func } from 'prop-types'

const InputText = ({ value = '', onChange = () => {} }) => {
  return (
    <input type="text" value={value} onChange={onChange} />
  )
}

InputText.propTypes = {
  value: string,
  onChange: func
}

export default InputText
