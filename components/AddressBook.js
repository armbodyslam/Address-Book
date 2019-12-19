import React, { useState } from 'react'

import AddressForm from './AddressForm'

import AddressList from './AddressList'

export default function AddressBook() {
  const [addresses, setAddresses] = useState([])

  const addAddress = address => {
    setAddresses([{ id: +new Date(), address: address }, ...addresses])
  }

  const clearList = () => {
    setAddresses([])
  }

  return (
    <>
      <AddressForm onSubmit={addAddress}></AddressForm>

      <AddressList addresses={addresses} clearList={clearList}></AddressList>
    </>
  )
}
