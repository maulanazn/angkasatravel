import BirdLogo from '@/public/tickets/plane-fly-logo-big.png';
import BirdLogoSmall from '@/public/tickets/plane-fly-logo-small.png';
import BirdLogoMini from '@/public/tickets/plane-fly.png';

import {IoSwapHorizontalSharp} from 'react-icons/io5';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { cookies } from 'next/headers';

type FlightData = {
    code: string,
    name: string
    photo: string,
    from: {
        location: string
    },
    takeoff: number,
    to: {
        location: string
    },
    landing: number,
    interval_time: string,
    transit: string,
    facilities: Array<string>,
    price: number
}

async function getFlightData(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export default async function FindTicket() {
    const cookieStorage = cookies();
    const flightData = await getFlightData(`${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight`);

    return (
        <main className='container'>
            <section className="lg:bg-gray-100 lg:w-[84.46rem] xl:bg-blue-500 lg:h-32 lg:rounded-b-3xl lg:ml-18 xl:ml-0">
                <Image src={BirdLogo} alt="bird logo" width="150" height="150"/>
                <Image src={BirdLogoSmall} alt="bird logo" className="lg:mt-[-5rem] lg:ml-20" width="40" height="40"/>
                <div className="lg:mt-[-4rem] lg:ml-24 text-white grid grid-cols-3 lg:p-8">
                    <p>from</p>
                    <p> </p>
                    <p className='lg:ml-[-25rem]'>to</p>
                    <p>Medan</p>
                    <p className='lg:ml-[-10rem]'><IoSwapHorizontalSharp size={30}/></p>
                    <p className='lg:ml-[-25rem]'>Tokyo</p>
                    <p>Monday, 20 July 2020</p>
                    <p className='lg:ml-[-10rem]'>4 Passengers</p>
                    <p className='lg:ml-[-25rem]'>Economy</p>
                </div>
                <Link href="#" className='flex text-white flex-row justify-end items-end lg:mt-[-6rem] lg:mr-[2rem]'>
                    Change Search
                </Link>
            </section>
            <div className="grid grid-cols-2">
                <section className='lg:w-80 container lg:p-8 lg:bg-gray-100 rounded-xl'>
                    <div className="grid grid-cols-3">
                        <p className="text-5xl text-black text-left lg:mt-10">Filter</p>
                        <p className="text-xl text-blue-700 text-left lg:mt-14 lg:ml-24">reset</p>
                    </div>

                    <div className='bg-gray-100'>
                        <div className="grid grid-rows-1">
                            <details className="bg-white">
                                <summary>
                                    Transit
                                </summary>
                                <div className="grid grid-cols-2">
                                    Direct
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    Transit
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    Transit 2+
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <hr className="border-b-4 border-b-black"/>
                    <div className='bg-gray-100'>
                        <div className="grid grid-rows-1">
                            <details className="bg-white">
                                <summary>
                                    Facilities
                                </summary>
                                <div className="grid grid-cols-2">
                                    Luggage
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    In-Flight Meal
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    Wi-fi
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <hr className="border-b-4 border-b-black"/>
                    <div className='bg-gray-100'>
                        <div className="grid grid-rows-1">
                            <details className="bg-white">
                                <summary>
                                    Departure Time
                                </summary>
                                <div className="grid grid-cols-2">
                                    00.00 - 06.00
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    06.00 - 12.00
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    12.00 - 18.00
                                    <input type="checkbox"/>
                                </div>
                                <div className="grid grid-cols-2">
                                    18.00 - 24.00
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <hr className="border-b-4 border-b-black"/>
                    <div className='bg-gray-100'>
                        <div className="grid grid-rows-1">
                            <details className="bg-white">
                                <summary>
                                    Time Arrived
                                </summary>
                                <div className="grid grid-cols-2">
                                    00.00 - 06.00
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    06.00 - 12.00
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    12.00 - 18.00
                                    <input type="checkbox"/>
                                </div>
                                <div className="grid grid-cols-2">
                                    18.00 - 24.00
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <hr className="border-b-4 border-b-black"/>
                    <div className='bg-gray-100'>
                        <div className="grid grid-rows-1">
                            <details className="bg-white">
                                <summary>
                                    Airlines
                                </summary>
                                <div className="grid grid-cols-2">
                                    <p>Garuda Indonesia</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Lion Air</p>    
                                    <input type="checkbox" />
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Citilink</p>
                                    <input type="checkbox"/>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Air Asia</p>
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <hr className="border-b-4 border-b-black"/>
                    <div className='bg-gray-100'>
                        <div className="grid grid-rows-1 bg-white">
                            <details>
                                <summary id='customRange1'>
                                    Ticket Price
                                </summary>
                                <input
                                    type="range"
                                    className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                                    id="customRange1" />
                                <div className="grid grid-cols-2 lg:gap-24">
                                    <h1>$ 145,00</h1>
                                    <h1>$ 100,000</h1>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
                <section className='lg:ml-[-18rem] grid grid-cols-1'>
                    <h1 className="text-5xl text-blue-700 text-left lg:mt-10">Select Ticket</h1>
                    {
                        flightData?.data?.map((item: FlightData, index: any) => {
                            return (
                                <div key={index} className="lg:bg-gray-100 lg:p-8 lg:rounded-xl lg:mt-10">
                                    <div className="lg:mb-10 grid grid-cols-2">
                                        <img src={item.photo} alt={item.name} width={80} height={80} />
                                        <p className='lg:ml-[-20rem]'>{item.name}</p>
                                    </div>
                                    <div className="lg:gap-5 grid grid-cols-7">
                                        <div className="grid grid-rows-3">
                                            <h1 className='text-xl'>{item.from.location}</h1>
                                            <p>{new Date(item.takeoff).toLocaleTimeString('id-ID')}</p>
                                        </div>
                                        <div className="grid grid-cols-1 lg:ml-4">
                                            <Image src={BirdLogoMini} alt="flight logo" width={30} />
                                        </div>
                                        <div className="grid grid-rows-3 lg:ml-[-3rem]">
                                            <h1 className='text-xl'>{item.to.location}</h1>
                                            <p>{new Date(item.landing).toLocaleTimeString('id-ID')}</p>
                                        </div>
                                        <div className="grid grid-rows-2">
                                            <p>{item.interval_time}</p>
                                            <p className="text-center">{item.transit}</p>
                                        </div>
                                        <div className="lg:w-50 lg:h-40 lg:gap-5 grid grid-cols-3">
                                            <img src="/tickets/ic_baseline-luggage.png" alt="baseline luggage" width={50} />
                                            <img src="/tickets/food-service.png" alt="Food Service" width={50} />
                                            <img src="/tickets/wifi.png" alt="Wifi service" width={50} />
                                        </div>
                                        <div className="lg:gap-5 lg:ml-8">
                                            <p>$ {item.price} / pax</p>
                                        </div>
                                        <Link href={cookieStorage.has("token") ? `/tickets/findticket/${item.code}` : "/auth/login"} className='bg-blue-600 lg:h-6 lg:p-5 flex justify-center items-center rounded-xl shadow-lg shadow-black'>
                                            Select
                                        </Link> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )
}