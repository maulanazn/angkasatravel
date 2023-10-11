'use client'

import JsBarcode from 'jsbarcode';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PlaneLogo from '@/public/tickets/plane-fly.png';
import Image from 'next/image';
import axios from 'axios';
import { FormatToDate, FormatToHours } from '@/lib/HelperAction';

export default function MyPassBook() {
  const {id} = useParams();
  const [bookingData, setBookingData] = useState({
    id: "",
    ticket: {
      airline: {
        photo: ""
      },
      from: {
        country: "",
        terminal: ""
      },
      to: {
        country: "",
        terminal: ""
      },
      code: "",
      takeoff: ""
    }
  });

  let barcodeResult = JsBarcode("#barcode")

  async function getBookingPass() {
    let bookingId = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${id}`, {
      cache: 'force-cache',
      headers:
      {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    });

    let result = await bookingId.json();

    setBookingData(result.data.result)
    
  }

  useEffect(() => {
    getBookingPass();
  }, [])
  
  return (
    <div className="bg-blue-500 ml-32">
      <div className="bg-white border-white">
        <p className="text-3xl">Booking Pass</p>
        <div className="border-gray-700">
          <div className="grid grid-cols-4">
            <Image src={bookingData.ticket.airline.photo} alt="logo" width={120} height={0} />
            <p className="text-2xl text-black">{bookingData.ticket.from.country}</p>
            <Image src={PlaneLogo} alt="plane logo" width={20}/>
            <p className="text-2xl text-black">{bookingData.ticket.to.country}</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <p className="text-xl text-black">Code</p>
            <p className="text-2xl text-black">{bookingData.ticket.code.substring(0, 7)}</p>
            <p className="text-xl text-black">Class</p>
            <p className="text-2xl text-black">Economy</p>
            <p className="text-xl text-black">Terminal</p>
            <p className="text-2xl text-black">{bookingData.ticket.from.terminal}</p>
            <p className="text-xl text-black">Gate</p>
            <p className="text-2xl text-black">{bookingData.id}</p>
          </div>
          <div className="grid grid-rows-1">
            <p className="text-xl text-black">Departure</p>
            <p className="text-2xl text-black">{FormatToDate(bookingData.ticket.takeoff)} - {FormatToHours(bookingData.ticket.takeoff)}</p>
          </div>
        </div>
        <img id="barcode"/>
      </div>
    </div>
  )
}
