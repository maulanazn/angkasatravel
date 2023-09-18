import React from "react";

export default function Profile(): React.ReactNode {
    return (
        <main className="bg-gray-200">        
            <section className="bg-white lg:w-[58rem] lg:p-8 rounded-xl">
                <div className="grid lg:grid-cols-2 lg:gap-24">
                    <p className="text-xl text-black">
                        Contact
                    </p>
                    <p className="text-xl text-black">
                        Biodata
                    </p>
                </div>
                <form action="#" className="grid grid-cols-2">
                    <div className="grid grid-rows-1">
                        <div className="lg:gap-1 lg:mt-[2.5rem] grid grid-rows-1">
                            <label htmlFor="email">Email</label>
                            <br/>
                            <input type="email" className="lg:mt-[-33.5rem] lg:h-7 border-b-2" placeholder="maulanazn@mail.com"/>
                        </div>
                        <br/>
                        <div className="lg:mt-[-30rem] lg:gap-1 grid grid-rows-1">
                            <label htmlFor="phone">Phone Number</label>
                            <br/>
                            <input type="tel" className="lg:mt-[-25.5rem] lg:h-7 border-b-2" placeholder="+628928382772"/>
                        </div>
                    </div>
                    <div className="grid grid-rows-6 lg:mt-10 lg:ml-14 lg:gap-3">
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
        </main>
    )
}