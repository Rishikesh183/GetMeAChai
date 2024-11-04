/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PaymentPage from '../components/PaymentPage'

const Username = ({ params }) => {
  return (
    <>
      <PaymentPage username={params.username}/>
    </>
  )
}

export default Username
