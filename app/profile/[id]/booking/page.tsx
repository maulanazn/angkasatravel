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
                <div className="grid grid-cols-3">
                    <p className="text-black text-xl">Monday, 20 july 2020</p>
                    <p className="text-black text-xl">-</p>
                    <p className="text-black text-xl lg:ml-[-10rem]">12.33</p>
                </div>
            </div>
        </main>
    )
}