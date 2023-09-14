import Image from "next/image";
import React from "react";
import ProfilePhoto from '@/public/home/maul main gitar.png';
import { IoChevronForwardOutline, IoLocation, IoLogOutOutline, IoPersonCircleOutline, IoSettingsOutline, IoStarOutline } from "react-icons/io5";
import Link from "next/link";
export default function Profile(): React.ReactNode {
    return (
        <main className="bg-gray-200 flex flex-row">
            <div className="lg:gap-5 lg:ml-10 lg:mt-20 lg:mb-20 flex flex-row">
                <section className="lg:p-3 bg-white lg:w-70 justify-center items-center lg:h-[45rem] rounded-xl flex flex-col lg:gap-5">
                    <Image src={ProfilePhoto} alt="photo profile" width="100" className="rounded-full"/>
                    <form action="#">
                        <button type="submit" className="bg-white lg:w-30 lg:h-10 border-blue-500 flex justify-center items-center">
                            Select Photo
                        </button>
                    </form>
                    <p>Maulana Zulkifli N</p>
                    <div className="flex flex-row justify-center items-center">
                        <IoLocation/>
                        Surakarta, Indonesia
                    </div>
                    <table className="bg-blue-500 rounded-xl">
                        <thead>
                            <tr>
                                <td>Cards</td>
                                <td> </td>
                                <td>
                                    <Link href='#'>
                                        + Add
                                    </Link>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4444 1234 5678 9876</td>
                                <td>X card</td>
                                <td>$ 100,000,02</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex flex-row">
                        <div className="flex flex-col lg:mt-5 lg:gap-10">
                            <Link href="#" className="flex lg:gap-5 flex-row">
                                <IoPersonCircleOutline/>
                                <p className="text-xl text-black">Profile</p>
                            </Link>
                            <Link href="#" className="flex lg:gap-5 flex-row">
                                <IoStarOutline/>
                                <p className="text-xl text-black">My Review</p>
                            </Link>
                            <Link href="#" className="flex lg:gap-5 flex-row">
                                <IoSettingsOutline/>
                                <p className="text-xl text-black">Settings</p>
                            </Link>
                            <Link href="#" className="flex lg:gap-5 flex-row text-red-700">
                                <IoLogOutOutline/>
                                <p className="text-xl">Logout</p>
                            </Link>
                        </div>
                        <div className="flex lg:gap-[3.4rem] lg:mt-5 flex-col lg:ml-10">
                            <IoChevronForwardOutline/>
                            <IoChevronForwardOutline/>
                            <IoChevronForwardOutline/>
                            <IoChevronForwardOutline/>
                        </div>
                    </div>
                </section>
                <section className="bg-white lg:w-[58rem] flex flex-col lg:p-8 rounded-xl">
                    <p className="text-blue-400 text-xl">PROFILE</p>
                    <form action="#" className="flex flex-row lg:mt-8 lg:gap-24">
                        <div className="flex flex-col">
                            <p className="text-xl text-black">
                                Contact
                            </p>
                            <br/>
                            <label htmlFor="email">Email</label>
                            <br/>
                            <input type="email" className="border-b-2" placeholder="maulanazn@mail.com"/>
                            <br/>
                            <label htmlFor="phone">Phone Number</label>
                            <br/>
                            <input type="tel" className="border-b-2" placeholder="+628928382772"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl text-black">
                                Biodata
                            </p>
                            <br/>
                            <label htmlFor="name">Full Name</label>
                            <br/>
                            <input type="text" placeholder="name" className="border-b-2"/>
                            <br/>
                            <label htmlFor="city">City</label>
                            <br/>
                            <select className="border-b-2 bg-white" data-te-select-init>
                                <option value="surakarta">Surakarta</option>
                                <option value="medan">Medan</option>
                                <option value="aceh">Aceh</option>
                            </select>
                            <br/>
                            <label htmlFor="address">Address</label>
                            <br/>
                            <input type="text" placeholder="Address" className="border-b-2"/>
                            <br/>
                            <label htmlFor="postcode">Post Code</label>
                            <br/>
                            <input type="number" placeholder="223322" className="border-b-2"/>
                            <br/>
                            <button type="submit" className="bg-blue-500 lg:w-40 lg:h-10 lg:ml-40 rounded-xl">
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}