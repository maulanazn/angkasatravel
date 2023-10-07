'use client'

import { useParams } from 'next/navigation'
import React from 'react'

export default function MyPayment() {
  const {id} = useParams();

  return (
    <div>My Payment id : {id}</div>
  )
}
