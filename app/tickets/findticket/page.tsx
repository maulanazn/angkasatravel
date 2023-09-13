import BirdLogo from '@/public/tickets/plane-fly-logo-big.png';
import BirdLogoSmall from '@/public/tickets/plane-fly-logo-small.png';
import BirdLogoMini from '@/public/tickets/plane-fly.png';
import BaseLineLuggage from '@/public/tickets/ic_baseline-luggage.png';
import FoodService from '@/public/tickets/food-service.png';
import WifiService from '@/public/tickets/wifi.png';
import {IoSwapHorizontalSharp} from 'react-icons/io5';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

type FlightData = {
    id: number,
    name: string
    flight_image: string,
    from: string,
    hour_0: number,
    to: string,
    hour_1: number,
    duration: string,
    transit: boolean,
    services: Array<string>,
    cost: number
}

async function getFlightData(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export default async function FindTicket(): Promise<React.ReactNode> {
    const flightData = await getFlightData("http://localhost:3000/flight");

    return (
        <main className="m-0 p-0">
            <section className="lg:bg-blue-500 lg:w-[84.46rem] xl:bg-blue-500 lg:h-32 lg:rounded-b-3xl lg:ml-18 xl:ml-0">
                <Image src={BirdLogo} alt="bird logo" width="150" height="150"/>
                <Image src={BirdLogoSmall} alt="bird logo" className="lg:mt-[-5rem] lg:ml-20" width="40" height="40"/>
                <div className="lg:gap-10 lg:mt-[-2rem] lg:ml-32 text-white">
                    <table>
                        <tbody>
                            <tr>
                                <td>from</td>
                                <td> </td>
                                <td  className='px-8'>to</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Medan</td>
                                <td><IoSwapHorizontalSharp size={30}/></td>
                                <td  className='px-8'>Tokyo</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Monday, 20 July 2020</td>
                                <td  className='px-2'>•</td>
                                <td>4 Passengers</td>
                                <td>•</td>
                                <td  className='px-2'>Economy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link href="#" className='flex text-white flex-row justify-end items-end lg:mt-[-4rem] lg:mr-[2rem]'>
                    Change Search
                </Link>
            </section>
            <div className="flex flex-row">
                <section className='lg:w-80'>
                    <div className="flex flex-row">
                        <p className="text-5xl text-black text-left lg:mt-10">Filter</p>
                        <p className="text-xl text-blue-700 text-left lg:mt-14 lg:ml-24">reset</p>
                    </div>

                    <div className='bg-gray-100'>
                        <div className="flex flex-col">
                            <details>
                                <summary>
                                    Transit
                                </summary>
                                <div className="flex flex-row">
                                    Direct
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    Transit
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    Transit 2+
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <hr/>
                    <div className='bg-gray-100'>
                        <div className="flex flex-col">
                            <details>
                                <summary>
                                    Facilities
                                </summary>
                                <div className="flex flex-row">
                                    Luggage
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    In-Flight Meal
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    Wi-fi
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <hr/>
                    <div className='bg-gray-100'>
                        <div className="flex flex-col">
                            <details>
                                <summary>
                                    Departure Time
                                </summary>
                                <div className="flex flex-row">
                                    00.00 - 06.00
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    06.00 - 12.00
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    12.00 - 18.00
                                    <input type="checkbox"/>
                                </div>
                                <div className="flex flex-row">
                                    18.00 - 24.00
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className='bg-gray-100'>
                        <div className="flex flex-col">
                            <details>
                                <summary>
                                    Time Arrived
                                </summary>
                                <div className="flex flex-row">
                                    00.00 - 06.00
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    06.00 - 12.00
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    12.00 - 18.00
                                    <input type="checkbox"/>
                                </div>
                                <div className="flex flex-row">
                                    18.00 - 24.00
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className='bg-gray-100'>
                        <div className="flex flex-col">
                            <details>
                                <summary>
                                    Airlines
                                </summary>
                                <div className="flex flex-row">
                                    {flightData[0].name}
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    {flightData[1].name}    
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    {flightData[2].name}
                                    <input type="checkbox"/>
                                </div>
                                <div className="flex flex-row">
                                    {flightData[3].name}
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className='bg-gray-100'>
                        <div className="flex flex-col">
                            <p>Ticket Price</p>
                            {/* TODO: ADDING PROGRESS SCROLL BAR */}
                        </div>
                    </div>
                </section>
                <section className='lg:ml-5'>
                    <h1 className="text-5xl text-blue-700 text-left lg:mt-10">Select Ticket</h1>
                    {
                        flightData?.map((item: FlightData, index: any) => {
                            return (
                                <div key={index} className="lg:bg-gray-100 lg:p-8 lg:rounded-xl lg:mt-10">
                                    <div className="flex flex-row lg:gap-10 lg:mb-10">
                                        <img src={item.flight_image} alt={item.name} width={80} height={80} />
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="flex flex-row lg:gap-10">
                                        <div className="flex flex-col">
                                            <h1 className='text-3xl'>{item.from}</h1>
                                            <p>{item.hour_0}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <Image src={BirdLogoMini} alt="flight logo" width={30} />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className='text-3xl'>{item.to}</h1>
                                            <p>{item.hour_1}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p>{item.duration}</p>
                                            <p className="text-center">{item.transit}</p>
                                        </div>
                                        <div className="flex flex-row lg:w-10 lg:h-10 lg:gap-5">
                                            <Image src={BaseLineLuggage} alt="baseline luggage" width={50} />
                                            <Image src={FoodService} alt="Food Service" width={50} />
                                            <Image src={WifiService} alt="Wifi service" width={50} />
                                        </div>
                                        <div className="flex flex-row lg:gap-5 lg:ml-28">
                                            <p>{item.cost}</p>
                                        </div>
                                        <Link href="/tickets/mybooking" className='bg-blue-600 lg:h-6 lg:p-5 flex justify-center items-center rounded-xl shadow-lg shadow-black'>
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