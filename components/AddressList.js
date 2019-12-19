import React from 'react'

export default function AddressList(props) {
  const clearList = () => {
    props.clearList()
  }

  return (
    <>
      <ul>
        {props.addresses.map(address => (
          <li key={address.id}>{address.address}</li>
        ))}
      </ul>
      <button onClick={clearList}>Clear List</button>
    </>
  )
}
