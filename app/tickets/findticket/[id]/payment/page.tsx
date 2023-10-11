'use client'

import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function MyPayment() {
  const {id} = useParams();
  const navigate = useRouter();
  const [statusId, setStatusId] = useState({
    statusId: "2"
  })

  async function PayNow(event: any) {
    event.preventDefault();

    let result = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/status/${id}`, statusId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    });

    if (result.status == 400 || result.status == 500) {
      navigate.back()
    }

    setStatusId(result.data.data);
    navigate.push(`/tickets/${id}`);
  }

  return (
    <div className='mt-10 mb-10'>
      <div className="bg-white flex flex-row gap-52 ml-10">
        <div className="grid grid-rows-1">
          <p className="text-lg">Payment Method</p>
          <div className="grid grid-cols-2">
            <h1>Paypal card</h1>
            <h1>gambar</h1>
            <h1>Credit card</h1>
            <h1>Credit gambar</h1>
          </div>
          <label>Card Number</label>
          <input type="number" name="card-no" className='appearance-none bg-gray-700 rounded-xl'/>
          <div className="grid grid-cols-2">
            <h1>Expiry Date</h1>
            <input type="number" name="card-no" className='appearance-none bg-gray-700 rounded-xl'/>
            <h1>CVV/CVC</h1>
            <input type="number" name="card-no" className='appearance-none bg-gray-700 rounded-xl'/>
          </div>
        </div>
        <div className="grid grid-rows-1">
          <p className="text-lg">Summary</p>
          <div className="border-b-2 grid grid-cols-2 gap-32">
            <p className="text-lg">Pay Now</p>
            <p className="text-lg">$9.99</p>
          </div>
          <div className="border-b-2 grid grid-cols-2 gap-32">
            <p className="text-lg">Referral Bonus</p>
            <p className="text-lg">-$2.00</p>
            <p className="text-lg">Vat</p>
            <p className="text-lg">-20%</p>
          </div>
          <button onClick={PayNow}>Pay Now</button>
        </div>
      </div>
    </div>
  )
}
