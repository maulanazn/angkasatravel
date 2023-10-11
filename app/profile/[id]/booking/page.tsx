'use client'
import { FormatToDate, FormatToHours } from "@/lib/HelperAction";
import JsBarcode from "jsbarcode";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Booking() {
  const {id} = useParams()
  const [bookingData, setBookingData] = useState([]);

  let barcodeResult = JsBarcode("#barcode")

  async function getBookingPass() {
    let bookingId: any = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets`, {
      cache: 'force-cache',
      method: 'GET',
      headers:
      {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    });

    let result: any = await bookingId.json();

    setBookingData(result.data)
    console.log(result.data)
  }

  useEffect(() => {
    getBookingPass();
  }, [])

  return (
    <main className="container">
      <div className="bg-white lg:p-8">
        <p className="text-blue-500 lg:mb-10 text-xl">
          MY BOOKING
        </p>
        <div className="grid grid-cols-2 lg:gap-96">
          <p className="text-black text-2xl">
            My Booking
          </p>
          <p className="text-blue-500 text-xl">
            Order History
          </p>
        </div>
      </div>
      {
        bookingData?.result?.map((item: any, index: any) => {
          return (
            <div key={index} className="bg-white lg:p-8 mt-8 mb-8">
              <div className="grid grid-cols-2 lg:mb-5">
                <p className="text-black text-xl">{FormatToDate(item.ticket.takeoff)}</p>
                <p className="text-black text-xl lg:ml-[15rem]">{FormatToHours(item.ticket.takeoff)}</p>
              </div>
              <div className="grid grid-cols-3 lg:mb-6">
                <p className="text-black text-xl">{item.ticket.from.country}</p>
                <Image src="/tickets/plane-fly.png" className="ml-10" alt="plane" width={30} height={0} />
                <p className="text-black text-xl">{item.ticket.to.country}</p>
                <p className="text-gray-700">{item.ticket.airline.name}</p>
                <p className="text-gray-700">{item.ticket.code.substring(0, 7)}</p>
              </div>
              <hr className="lg:w-[45rem]" />
              <div className="grid grid-cols-2 lg:mt-6">
                <div className="text-gray-700 text-xl">Status</div>
                <div className={`text-white text-md ${item.status.name == "Pending" ? "bg-orange-600" : "bg-green-600"} rounded-xl text-center`}><a href={item.status.name == "Pending" ? `/tickets/findticket/${item.code}/payment` : `/tickets/${item.code}`}>{item.status.name}</a></div>
              </div>
            </div>
          )
        })
      }
    </main>
  )
}