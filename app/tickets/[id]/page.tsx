'use client'

import { useParams } from 'next/navigation'
import React from 'react'

export default function MyPassBook() {
  const {id} = useParams();

  return (
    <div>My pass booking with id : {id}</div>
  )
}
