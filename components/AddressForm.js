import React, { useState } from 'react'

export default function AddressForm(props) {
  const [input, setInput] = useState('')

  const changeInput = event => {
    setInput(event.target.value)
  }

  const onSubmit = () => {
    props.onSubmit(input)
  }

  const clearInput = () => {
    setInput('')
  }

  return (
    <>
      <input type="text" value={input} onChange={changeInput} />

      <button onClick={onSubmit}>Add</button>
      <button onClick={clearInput}>Clear</button>
    </>
  )
}
