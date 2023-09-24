import Image from 'next/image'
import Link from 'next/link'
import BirdLogoMini from '@/public/auth/angkasa-logo-mini.png';
import { IoChevronBack, IoChevronForward, IoLocation, IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoYoutube, IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';
import GPlayLogo from '@/public/home/google-play-store.png';
import APlayLogo from '@/public/home/apple-app-store.png';
import Jpn1 from '@/public/home/travel-1.png'
import Jpn2 from '@/public/home/travel-2.png'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const runtime = 'edge';

type TripData = {
    id: number,
    trip_image: string,
    airlines_available: number,
    places: string,
    country: string
}

async function getTripData(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

async function logoutUser() {
    'use server'
    const cookieStorage = cookies();

    cookieStorage.delete("id")
    cookieStorage.delete("token")

    return redirect("/auth/login")
}

export default async function Home() {
    const cookieStorage = cookies();
    const tripData = await getTripData("https://6503a8bea0f2c1f3faec1195.mockapi.io/flight/lists/trip_inspiration");

    return (
        <main className='container'>
            <nav className='grid grid-cols-5 lg:p-10'>
                <Link href='/'>
                    <Image src={BirdLogoMini} alt="angkasa logo" width="120" height="88" />
                </Link>

                <input type="search" className="lg:ml-42 lg:mr-5 bg-gray-200 lg:w-80 lg:h-10 rounded-xl border-xl" placeholder="Where you want to go?" />
                <Link href={cookieStorage.has("token") ? "/tickets/findticket" : '/auth/login'} className="lg:hover:border-b-2 lg:ml-40 lg:hover:border-b-blue-800">
                    Find Tickets
                </Link>
                <Link href={cookieStorage.has("token") ? `/profile/1/booking` : '/auth/login'} className="lg:ml-36 lg:hover:border-b-2 lg:hover:border-b-blue-800">
                    My Bookings
                </Link>

                {
                    cookieStorage.has("token") ? 
                        <form action={logoutUser} method="get">
                            <div className="flex flex-row lg:ml-44 lg:mt-2 lg:gap-5">
                                <button type='submit'>Log Out</button>
                            </div>
                        </form>
                        :
                        <div className="flex flex-row lg:ml-44 lg:mt-2 lg:gap-5">
                            <Link href="/auth/register">Sign Up</Link>
                        </div>
                }
            </nav>

            <div className="lg:p-8">
                <section className="grid grid-cols-2 lg:gap-96">
                    <div className="break-words">
                        <h1 className="text-blue-500 text-5xl">Find your Flight</h1>
                        <p>and explore the world with us</p>
                    </div>
                    <Image src={Jpn2} alt="japan 2" width={400}/>
                </section>
                <Image src={Jpn1} alt="Japan" className="lg:mt-[-20rem]" width={600} />
                <h1 className='text-blue-700 text-xl lg:mt-32'>TRENDING</h1>
                <div className="grid grid-cols-2 lg:mb-10">
                    <h1 className="text-black text-3xl">Trending Destinations</h1>
                    <h1 className="text-black text-xl lg:ml-[30rem]">View all</h1>
                </div>
                <div className="grid sm:grid lg:grid-cols-6 sm:grid-cols-3 gap-10 sm:gap-10">
                    {tripData?.map((item: TripData, index: any) => {
                        return (
                            <div key={index} className="shadow-lg shadow-black hover:shadow-none">
                                <Image src={item.trip_image} alt={item.places} height={0} width={300}/>
                                <div className="px-4 py-4 bg-gray-700">
                                    <Link href="/tickets/findticket" className="grid sm:grid rounded-xl lg:grid-cols-2 sm:grid-cols-1 bg-white bg-opacity-25 lg:w-36">
                                        <p className="text-white lg:ml-0">{item.airlines_available}</p>
                                        <p className="text-white lg:ml-[0rem] font-extralight">Airlines</p>
                                    </Link>
                                    <p className="text-xl text-center sm:text-center text-white lg:mb-6">{item.places},</p>
                                    <p className="text-xl text-white">{item.country}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="bg-blue-500 lg:w-200 lg:h-150 rounded-xl lg:ml-24 lg:mt-32">
                <Image src="/tickets/plane-fly-logo-big.png" alt="bird logo" width={500} height={70}/>
                <div className="lg:mt-[-22rem]">
                    <div className="grid grid-rows-2 lg:text-center">
                        <p className="text-white text-xl">TOP 10</p>
                        <p className="text-white text-3xl">Top 10 Destinations</p>
                    </div>
                    <div className="grid lg:grid-cols-6 sm:grid-cols-1 lg:text-center">
                        <div className="grid grid-cols-6 lg:gap-44 lg:ml-32 lg:mt-10">
                        {tripData?.map((item: TripData, index: any) => {
                            return (
                                <div key={index} className="shadow-lg grid grid-rows-2 shadow-black hover:shadow-none">
                                    <Image className="rounded-full" src={item.trip_image} alt={item.places} width={250} height={0} />
                                    <p className="text-white text-xl">{item.country}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:mt-10 lg:gap-10">
                        <Link href='#' className='lg:ml-[35rem]'>
                            <IoChevronBack size={60}/>
                        </Link>
                        <Link href='#'>
                            <IoChevronForward size={60}/>
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="lg:mt-24 lg:gap-20 lg:p-8 lg:ml-36">
                <div className="flex flex-row lg:gap-24">
                    <div className="flex flex-col lg:gap-5">
                        <Image src={BirdLogoMini} alt="bird logo" width="120" height="88" />
                        <p className='break-after-right'>Find your flight and explore the world with us. <br /> We will take care of the reset</p>
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
                            <IoLogoFacebook size={30} />
                            <IoLogoTwitch size={30} />
                            <IoLogoInstagram size={30} />
                            <IoLogoYoutube size={30} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row lg:gap-[50rem]">
                    @ Angkasa. All Rights Reserved
                    <div className="lg:ml-[-8rem] flex flex-row">
                        <IoLocation /> Jakarta Indonesia
                    </div>
                </div>
            </footer>
        </main>
    )
}
