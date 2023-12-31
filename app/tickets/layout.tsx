'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {IoLocation, IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoYoutube, IoMailOutline} from 'react-icons/io5';
import {IoNotificationsOutline} from 'react-icons/io5';
import BirdLogoMini from '@/public/auth/angkasa-logo-mini.png';
import GPlayLogo from '@/public/home/google-play-store.png';
import APlayLogo from '@/public/home/apple-app-store.png';
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: "500", preload: false})

export const runtime = 'edge';

export default function TicketLayout({children}: {
    children: React.ReactNode
}) {
    const [userData, setUserData] = useState({
        uniqId: "",
		email: "",
		name: ""
    })

    async function getUserDetail() {
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/detail`, {
            cache: 'force-cache',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        const data = await result.json()

        setUserData(data.data);
    }

    useEffect(() => {
        getUserDetail()
    }, [])
    
    return (
        <html>
            <body className={poppins.className}>
                <nav className='grid lg:grid-cols-3 lg:p-10'>
                    <Link href='/'>
                        <Image src={BirdLogoMini} alt="angkasa logo" width="120" height="88" />
                    </Link>

                    <div className="grid grid-cols-3 lg:gap-5">
                        <input type="search" className="lg:ml-[-10rem] lg:mr-5 bg-gray-200 lg:w-80 lg:h-10 rounded-xl border-xl" placeholder="Where you want to go?"/>
                        <Link href="/tickets/findticket" className="lg:hover:border-b-2 lg:ml-20 lg:hover:border-b-blue-800">
                            Find Tickets
                        </Link>
                        {
                            localStorage.getItem("token") ?
                                <Link href={`/profile/${userData.uniqId}/booking`} className="lg:ml-28 lg:hover:border-b-2 lg:hover:border-b-blue-800">
                                    My Bookings
                                </Link>
                            : undefined

                        }
                    </div>
                    
                    <div className="grid grid-cols-3 lg:gap-5 lg:ml-40">
                        {
                            localStorage.getItem("token") ?
                            <Link href="#">
                                <IoMailOutline size={30}/>
                            </Link>
                            : undefined
                        }
                        {
                             localStorage.getItem("token") ?
                            <Link href="#">
                                <IoNotificationsOutline size={30}/>
                            </Link>
                            : undefined
                        }
                        {
                            localStorage.getItem("token") ?
                                <Link href={`/profile/${userData.uniqId}`}>
                                    <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/70041921?v=4" alt="your profile" width="40" height="40" />
                                </Link>
                            :
                                undefined

                        }
                    </div>
                </nav>
                <div>
                    {children}
                </div>
                <footer className="lg:mt-24 lg:gap-20 lg:p-8 lg:ml-36">
                    <div className="flex flex-row lg:gap-24">
                        <div className="flex flex-col lg:gap-5">
                            <Image src={BirdLogoMini} alt="bird logo" width="120" height="88" />
                            <p className='break-after-right'>Find your flight and explore the world with us. <br/> We will take care of the reset</p>
                        </div>
                        <div className="flex flex-col lg:gap-5">
                            <p>Features</p>
                            <Link href="/tickets/findticket">Find Ticket</Link>
                            <Link href="#">My Booking</Link>
                            <Link href="#">Chat</Link>
                            <Link href="#">Notification</Link>
                        </div>
                        <div className="flex flex-col lg:gap-5">
                            Download Angkasa app

                            <Image src={GPlayLogo} alt="Google play" width="180" />
                            <Image src={APlayLogo} alt="Apple Store" width="180" />
                        </div>
                        <div className="flex flex-col">
                            <p>Follow us</p>
                            <div className="flex flex-row">
                                <IoLogoFacebook size={30}/>
                                <IoLogoTwitch size={30}/>
                                <IoLogoInstagram size={30}/>
                                <IoLogoYoutube size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row lg:gap-[50rem]">
                        @ Angkasa. All Rights Reserved
                        <div className="lg:ml-[-8rem] flex flex-row">
                            <IoLocation/> Jakarta Indonesia
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}