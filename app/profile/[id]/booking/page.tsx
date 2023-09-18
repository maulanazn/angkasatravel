import Image from "next/image";

export default function Booking() {
    return (
        <main className="bg-gray-700">
            <div className="bg-white lg:p-8">
                <p className="text-blue-500 lg:mb-10 text-xl">
                    MY BOOKING
                </p>
                <div className="grid grid-cols-2 lg:gap-96">
                    <p className="text-black text-2xl">
                        My Booking
                    </p>
                    <p className="text-blue-500 text-xl">
                        Order History
                    </p>
                </div>
            </div>
            <div className="bg-white lg:p-8">
                <div className="grid grid-cols-2 lg:mb-5">
                    <p className="text-black text-xl">Monday, 20 july 2020</p>
                    <p className="text-black text-xl lg:ml-[15rem]">12.33</p>
                </div>
                <div className="grid grid-cols-3 lg:mb-6">
                    <p className="text-black text-xl">IDN</p>
                    <Image src="/tickets/plane-fly.png" alt="plane" width={30} height={0}/>
                    <p className="text-black text-xl">JPN</p>
                    <p className="text-gray-700">Garuda Indonesia,</p>
                    <p className="text-gray-700">AB-221</p>
                </div>
                <hr className="lg:w-[45rem]"/>
                <div className="grid grid-cols-2 lg:mt-6">
                    <div className="text-gray-700 text-xl">Status</div>
                    <div className="text-white text-md bg-orange-600 rounded-xl text-center">Waiting for payment</div>
                </div>
            </div>
            <div className="bg-white lg:p-8">
                <div className="grid grid-cols-2 lg:mb-5">
                    <p className="text-black text-xl">Monday, 20 july 2020</p>
                    <p className="text-black text-xl lg:ml-[15rem]">12.33</p>
                </div>
                <div className="grid grid-cols-3 lg:mb-6">
                    <p className="text-black text-xl">IDN</p>
                    <Image src="/tickets/plane-fly.png" alt="plane" width={30} height={0}/>
                    <p className="text-black text-xl">JPN</p>
                    <p className="text-gray-700">Garuda Indonesia,</p>
                    <p className="text-gray-700">AB-221</p>
                </div>
                <hr className="lg:w-[45rem]"/>
                <div className="grid grid-cols-2 lg:mt-6">
                    <div className="text-gray-700 text-xl">Status</div>
                    <div className="text-white text-md bg-green-600 rounded-xl text-center">Eticket issued</div>
                </div>
            </div>
        </main>
    )
}