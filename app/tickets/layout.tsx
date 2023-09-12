import Image from "next/image";
import Link from "next/link";
import React from "react";
import {IoMailOutline} from 'react-icons/io5';
import {IoNotificationsOutline} from 'react-icons/io5';
import BirdLogoMini from '@/public/auth/angkasa-logo-mini.png';

export default function TicketLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <nav className='flex flex-row lg:p-10'>
                    <Link href='/'>
                        <Image src={BirdLogoMini} alt="angkasa logo" width="120" height="88" />
                    </Link>

                    <div className='lg:gap-1'>
                        <input type="search" className="lg:ml-60 lg:mr-5 bg-gray-200 lg:w-80 lg:h-10 rounded-xl border-xl" placeholder="Where you want to go?"/>
                        <Link href="/tickets/findticket" className="lg:hover:border-b-2 lg:hover:border-b-blue-800">
                            Find Tickets
                        </Link>
                        <Link href="#" className="lg:ml-10 lg:hover:border-b-2 lg:hover:border-b-blue-800">
                            My Bookings
                        </Link>
                    </div>

                    <div className="flex flex-row lg:ml-44 lg:gap-5">
                        <Link href="#">
                            <IoMailOutline size={30}/>
                        </Link>
                        <Link href="#">
                            <IoNotificationsOutline size={30}/>
                        </Link>
                        <Link href="#">
                            <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/70041921?v=4" alt="your profile" width="40" height="40" />
                        </Link>
                    </div>
                </nav>
                <div>
                    {children}
                </div>
                <footer>
                    <h1>Angkasa Pura</h1>
                </footer>
            </body>
        </html>
    )
}