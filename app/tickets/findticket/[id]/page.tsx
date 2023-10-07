'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BirdLogo from '@/public/tickets/plane-fly-logo-big.png';
import BirdLogoSmall from '@/public/tickets/plane-fly-logo-small.png';
import Link from "next/link";
import PlaneLogo from '@/public/tickets/plane-fly.png';
import { useParams, useRouter } from "next/navigation";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FormatToHours } from "@/lib/HelperAction";
import axios from "axios";

type FlightData = {
  code: string,
  name: string
  photo: string,
  from: {
    location: string,
    country: string
  },
  takeoff: number,
  to: {
    location: string,
    country: string
  },
  landing: number,
  interval_time: string,
  transit: string,
  facilities: Array<string>,
  price: number
}

export default function MyBooking() {
  const code = useParams();
  const { id } = code;
  const router = useRouter();
  const [userData, setUserData] = useState({
    title1: '',
    fullname1: '',
    nationality1: '',
    title2: '',
    fullname2: '',
    nationality2: '',
  });

  const [flightData, setFlightData] = useState({
    code: "",
    name: "",
    photo: "",
    from: {
      location: "",
      country: ""
    },
    takeoff: "",
    to: {
      location: "",
      country: ""
    },
    landing: "",
    interval_time: "",
    transit: "",
    facilities: "",
    price: ""
  })

  async function getFlightData() {
    const flightDetailData: any = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight/${id}`);

    setFlightData(flightDetailData.data);
  }

  async function postPassengerData(event: any) {
    event.preventDefault();

    let result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${id}`, userData, {
      headers:
      {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    });

    if (result.status != 201) {
      router.push(`/`)
    }

    setUserData(result.data.data);
    router.push('/tickets/findticket')
  }

  function handlePostPassengerData(event: any) {
    setUserData({
      ...userData,
      [event.target.name]: event?.target.value
    })
  }

  useEffect(() => {
    getFlightData();
  }, [])

  const takeoff_time = FormatToHours(flightData?.takeoff);
  const landing_time = FormatToHours(flightData?.landing);

  return (
    <main className="bg-gray-100">
      <section className="lg:bg-blue-500 lg:w-[84.46rem] xl:bg-blue-500 lg:h-32 lg:rounded-b-3xl lg:ml-18 xl:ml-0">
        <Image src={BirdLogo} alt="bird logo" width="150" height="150" />
        <Image src={BirdLogoSmall} alt="bird logo" className="lg:mt-[-5rem] lg:ml-20" width="40" height="40" />
        <div className="lg:gap-10 lg:mt-[0rem] flex flex-row lg:ml-12 text-white">
          <h1>Contact Person Details</h1>
        </div>
        <div className="flex flex-row lg:gap-5 lg:mt-[-2rem] lg:mr-[2rem] justify-end items-end text-white">
          <h1>Flight Details</h1>
          <Link href='#'>View Details</Link>
        </div>
      </section>
      <div className="grid grid-cols-2">
        <form className="lg:p-8 lg:ml-12">
          <div className="bg-white rounded-xl lg:p-8 lg:w-[42rem] mt-[-4rem] lg:mb-10">
            <div className="grid grid-rows-1 lg:gap-5">
              <label>Full Name</label>
              <input type="text" id="title1" onChange={handlePostPassengerData} name="title1" className="border-b-2" />
            </div>
            <div className="grid grid-rows-1 lg:gap-5 mt-5">
              <label>Email</label>
              <input type="email" id="fullname1" onChange={handlePostPassengerData} name="fullname1" className="border-b-2" />
            </div>
            <div className="grid grid-rows-1 lg:gap-5 mt-5">
              <label>Phone Number</label>
              <div className="flex flex-row prose lg:prose-lg prose-slate">
                <select>
                  <option value="id">+62</option>
                  <option value="us">+1</option>
                  <option value="uk">+44</option>
                </select>
                <input type="tel" id="nationality1" onChange={handlePostPassengerData} name="nationality1" className="border-b-2" />
              </div>
            </div>
          </div>
          <h1>Passenger Details</h1>
          <div className="bg-white rounded-xl lg:p-8 lg:w-[42rem] lg:mb-10">
            <div className="flex flex-row bg-blue-500 lg:p-2 rounded-xl">
              <p>Passenger: 1 Adult</p>
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer lg:ml-80"
                htmlFor="flexSwitchCheckDefault"
              >Same as contact person</label>
              <input
                onChange={handlePostPassengerData}
                className="mr-3 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
            <div className="grid grid-cols-1 lg:gap-5 lg:mt-10">
              <label>Title</label>
              <select className="border-b-2 bg-white" name="title2" onChange={handlePostPassengerData} data-te-select-init>
                <option value="title2">Mr</option>
                <option value="title2">Mrs</option>
                <option value="title2">Ms</option>
              </select>
            </div>
            <div className="grid grid-cols-1 lg:gap-5 mt-5">
              <label>Full Name</label>
              <input type="text" id="fullname2" onChange={handlePostPassengerData} name="fullname2" className="border-b-2" placeholder="Mike Kovaski" />
            </div>
            <div className="grid grid-cols-1 lg:gap-5 mt-5">
              <label>Nasionality</label>
              <select className="border-b-2 bg-white" onChange={handlePostPassengerData} name="nationality2" data-te-select-init>
                <option value="nationality2">Indonesia</option>
                <option value="nationality2">Russia</option>
                <option value="nationality2">Tiongkok</option>
              </select>
            </div>
          </div>
          <h1>Passenger Details</h1>
          <div className="bg-white rounded-xl lg:p-8 lg:w-[42rem] lg:mb-10">
            <div className="grid grid-cols-3 lg:gap-5">
              <input type="checkbox" className="lg:ml-[-10rem]" id="insurance" />
              <p className="text-xl lg:ml-[-10rem] text-black">
                Travel Insurance
              </p>
              <p className="flex lg:mt-[-2rem] justify-end items-end">
                $2,00/pax
              </p>
            </div>
            <hr className="lg:mt-5" />
            <p className="flex justify-start items-start lg:mt-5">
              Get travel compensation up to 10.000,00
            </p>
          </div>
          <button onClick={postPassengerData} className="bg-blue-600 lg:w-96 lg:h-16 rounded-xl lg:ml-40 text-white flex justify-center items-center">
            Proceed to Payment
          </button>
        </form>
        <section className="bg-white lg:ml-32 rounded-xl lg:p-8 lg:w-[32rem] lg:h-96 mt-[-2rem]">
          <div className="grid grid-cols-3 lg:mb-5">
            <Image src={flightData?.photo} alt="Garuda Logo" width={100} height={0} />
            <p className="text-xl text-black">{flightData?.name}</p>
          </div>
          <div className="grid grid-cols-3 lg:mb-5 lg:ml-5">
            <p className="lg:ml-[-1rem]">{flightData?.from?.location} ({flightData?.from?.country})</p>
            <Image className="lg:ml-0" src={PlaneLogo} alt="plane flyyy" width="20" />
            <p className="lg:ml-[-6rem]">{flightData?.to?.location} ({flightData?.to?.country})</p>
            <p className="lg:ml-[-1rem]">Sunday, 15 August 2020</p>
            <p className="lg:ml-0">•</p>
            <p className="lg:ml-[-6rem]">{takeoff_time} - {landing_time}</p>
          </div>
          <div className="grid grid-rows-1">
            <div className="flex flex-row">
              <IoCheckmarkDoneCircleOutline />
              <p className="text-blue-500">Refundable</p>
            </div>
            <div className="flex flex-row">
              <IoCheckmarkDoneCircleOutline />
              <p className="text-blue-500">Can Reschedule</p>
            </div>
            <hr className="lg:mt-10 lg:mb-10" />
            <div className="flex flex-row">
              <p>Total Payment</p>
              <p className="lg:ml-80 text-blue-500">{flightData?.price}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
