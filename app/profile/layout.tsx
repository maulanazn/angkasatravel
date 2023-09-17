import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronForwardOutline, IoLocation, IoLogOutOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoYoutube, IoMailOutline, IoNotificationsOutline, IoPersonCircleOutline, IoSettingsOutline, IoStarOutline } from "react-icons/io5";
import BirdLogoMini from '@/public/auth/angkasa-logo-mini.png';
import GPlayLogo from '@/public/home/google-play-store.png';
import APlayLogo from '@/public/home/apple-app-store.png';

const poppins = Poppins({weight: "500", preload: false});
export const runtime = 'edge';

export default function ProfileLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <body className={poppins.className}>
                <nav className='grid lg:grid-cols-3 lg:p-10'>
                    <Link href='/'>
                        <Image src={BirdLogoMini} alt="angkasa logo" width="120" height="88" />
                    </Link>

                    <div className="grid grid-cols-3 lg:ml-[-10rem] lg:gap-5">
                        <input type="search" className="lg:ml-30 lg:mr-5 bg-gray-200 lg:w-80 lg:h-10 rounded-xl border-xl" placeholder="Where you want to go?"/>
                        <Link href="/tickets/findticket" className="lg:hover:border-b-2 lg:ml-36 lg:hover:border-b-blue-800">
                            Find Tickets
                        </Link>
                        <Link href="/profile/1/booking" className="lg:ml-32 lg:hover:border-b-2 lg:hover:border-b-blue-800">
                            My Bookings
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 lg:ml-40">
                        <Link href="#">
                            <IoMailOutline size={30}/>
                        </Link>
                        <Link href="#">
                            <IoNotificationsOutline size={30}/>
                        </Link>
                        <Link href="/profile/1">
                            <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/70041921?v=4" alt="your profile" width="40" height="40" />
                        </Link>
                    </div>
                </nav>
                <div className="lg:gap-5 lg:ml-10 lg:mt-20 lg:mb-20 grid grid-cols-4">
                    <section className="lg:p-3 bg-white lg:w-64 lg:h-[45rem] rounded-xl grid grid-rows-1 lg:gap-5">
                        <Image src="/home/maul main gitar.png" alt="photo profile" width="100" height={0} className="rounded-full"/>
                        <form action="#">
                            <button type="submit" className="bg-white lg:w-30 lg:h-10 border-blue-500">
                                Select Photo
                            </button>
                        </form>
                        <p>Maulana Zulkifli N</p>
                        <div className="grid grid-cols-1">
                            <IoLocation/>
                            Surakarta, Indonesia
                        </div>
                        <div className="bg-blue-500 rounded-xl grid grid-cols-6">
                            <p>Cards</p>
                            <p>+ Add</p>
                            <p>1234 56789 1232</p>
                            <div className="grid grid-cols-1">
                                <p>X card</p>
                                <p>$ 100,000,01</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="grid grid-rows-1 lg:mt-5 lg:gap-10">
                                <Link href="/profile/1" className="grid grid-cols-2 lg:gap-1">
                                    <IoPersonCircleOutline/>
                                    <p className="text-xl text-black">Profile</p>
                                </Link>
                                <Link href="#" className="grid grid-cols-2 lg:gap-1">
                                    <IoStarOutline/>
                                    <p className="text-xl text-black">My Review</p>
                                </Link>
                                <Link href="#" className="grid grid-cols-2 lg:gap-1">
                                    <IoSettingsOutline/>
                                    <p className="text-xl text-black">Settings</p>
                                </Link>
                                <Link href="#" className="grid grid-cols-2 lg:gap-1 text-red-700">
                                    <IoLogOutOutline/>
                                    <p className="text-xl">Logout</p>
                                </Link>
                            </div>
                            <div className="lg:gap-[3.4rem] lg:mt-5 lg:ml-24 grid grid-rows-1">
                                <IoChevronForwardOutline/>
                                <IoChevronForwardOutline/>
                                <IoChevronForwardOutline/>
                                <IoChevronForwardOutline/>
                            </div>
                        </div>
                    </section>
                    <div>
                        {children}
                    </div>
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