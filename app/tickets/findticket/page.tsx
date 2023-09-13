import BirdLogo from '@/public/tickets/plane-fly-logo-big.png';
import BirdLogoSmall from '@/public/tickets/plane-fly-logo-small.png';
import BirdLogoMini from '@/public/tickets/plane-fly.png';
import GarudaLogo from '@/public/tickets/garuda-indonesia-logo.png';
import AirAsiaLogo from '@/public/tickets/air-asia-logo.png';
import BaseLineLuggage from '@/public/tickets/ic_baseline-luggage.png';
import FoodService from '@/public/tickets/food-service.png';
import WifiService from '@/public/tickets/wifi.png';
import {IoSwapHorizontalSharp} from 'react-icons/io5';
import {IoEllipse} from 'react-icons/io5';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export default function FindTickets(): React.ReactNode {
    
    return (
        <main className="m-0 p-0">
            <section className="lg:bg-blue-500 lg:w-[84.46rem] xl:bg-blue-500 lg:h-32 lg:rounded-b-3xl lg:ml-18 xl:ml-0">
                <Image src={BirdLogo} alt="bird logo" width="150" height="150"/>
                <Image src={BirdLogoSmall} alt="bird logo" className="lg:mt-[-5rem] lg:ml-20" width="40" height="40"/>
                <div className="lg:gap-10 lg:mt-[-2rem] lg:ml-32 text-white">
                    <table>
                        <tbody>
                            <td>from</td>
                            <td> </td>
                            <td  className='px-8'>to</td>
                        </tbody>
                        <tbody>
                            <td>Medan</td>
                            <td><IoSwapHorizontalSharp size={30}/></td>
                            <td  className='px-8'>Tokyo</td>
                        </tbody>
                        <tbody>
                            <td>Monday, 20 July 2020</td>
                            <td  className='px-2'><IoEllipse/></td>
                            <td>4 Passengers</td>
                            <td><IoEllipse/></td>
                            <td  className='px-2'>Economy</td>
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
                                    Garuda Indonesia
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    Air Asia
                                    <input type="checkbox" />
                                </div>
                                <div className="flex flex-row">
                                    Lion Air
                                    <input type="checkbox"/>
                                </div>
                                <div className="flex flex-row">
                                    Citilink
                                    <input type="checkbox"/>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className='bg-gray-100'>
                        <div className="flex flex-col">
                            <p>Ticket Price</p>
                        </div>
                    </div>
                </section>
                <section className='lg:ml-10'>
                    <h1 className="text-5xl text-blue-700 text-left lg:mt-10">Select Ticket</h1>
                    {[
                        [GarudaLogo, 'Garuda Indonesia', 'IDN', '12.33', 'JPN', '15.21', '3 hours 11 minutes', '(1 transit)', '$214,00/pax'],
                        [AirAsiaLogo, 'Air Asia', 'IDN', '12.33', 'NEP', '16.21', '4 hours 11 minutes', '(2 transit)', '$314,00/pax']
                    ].map(([flight_logo, flight_name, from_where, hour_0, to_where, hour_1, duration, is_transit, tax]) => (
                        <div className="lg:bg-gray-100 lg:p-8 lg:rounded-xl lg:mt-10">
                            <div className="flex flex-row lg:gap-10 lg:mb-10">
                                <Image src={flight_logo} alt="Garuda Logo" width={80} height={80} />
                                <p>{flight_name}</p>
                            </div>
                            <div className="flex flex-row lg:gap-10">
                                <div className="flex flex-col">
                                    <h1 className='text-3xl'>{from_where}</h1>
                                    <p>{hour_0}</p>
                                </div>
                                <div className="flex flex-col">
                                    <Image src={BirdLogoMini} alt="flight logo" width={30} />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className='text-3xl'>{to_where}</h1>
                                    <p>{hour_1}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>{duration}</p>
                                    <p className="text-center">{is_transit}</p>
                                </div>
                                <div className="flex flex-row lg:w-10 lg:h-10 lg:gap-5">
                                    <Image src={BaseLineLuggage} alt="baseline luggage" width={50} />
                                    <Image src={FoodService} alt="Food Service" width={50} />
                                    <Image src={WifiService} alt="Wifi service" width={50} />
                                </div>
                                <div className="flex flex-row lg:gap-5 lg:ml-28">
                                    <p>{tax}</p>
                                </div>
                                <Link href="/tickets/mybooking" className='bg-blue-600 lg:h-6 lg:p-5 flex justify-center items-center rounded-xl shadow-lg shadow-black'>
                                    Select
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}