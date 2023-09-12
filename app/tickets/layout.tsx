import Image from "next/image";
import Link from "next/link";
import React from "react";
import {IoMailOutline} from 'react-icons/io5';
import {IoNotificationsOutline} from 'react-icons/io5';

export default function TicketLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <nav className='flex flex-row container lg:gap-1'>
                    <h1 className="lg:ml-5">Angkasa</h1>
                    <input type="search" className="lg:ml-96" placeholder="Where you want to go?"/>
                    <Link href="/tickets/findticket">
                        Find Tickets
                    </Link>
                    <Link href="#">
                        My Bookings
                    </Link>

                    <div className="flex flex-row lg:ml-44 lg:gap-5">
                        <Link href="#">
                            <IoMailOutline size={30}/>
                        </Link>
                        <Link href="#">
                            <IoNotificationsOutline size={30}/>
                        </Link>
                        <Link href="#">
                            <Image className='rounded-xl' src="https://avatars.githubusercontent.com/u/70041921?v=4" alt="your profile" width="60" height="60" />
                        </Link>
                    </div>
                </nav>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}