import BirdLogo from '@/public/tickets/plane-fly-logo-big.png'
import BirdLogoSmall from '@/public/tickets/plane-fly-logo-small.png'
import {IoSwapHorizontalSharp} from 'react-icons/io5';
import {IoEllipse} from 'react-icons/io5';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export default function FindTickets() {
    return (
        <main className="m-0 p-0">
            <section className="lg:bg-blue-500 lg:w-[85.4rem] lg:h-32 lg:rounded-b-3xl lg:ml-18">
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
            <h1 className="text-5xl text-blue-700 text-left lg:mt-10">Select a Ticket</h1>
        </main>
    )
}