import Image from "next/image";
import React from "react";
import BirdLogo from '@/public/auth/angkasa-logo.png';
import BirdLogoMini from '@/public/auth/angkasa-logo-mini.png';

export default function AuthLayout({
    children,
} : {
    children: React.ReactNode
})  {
    return (
        <html>
            <Image src={BirdLogoMini} className='lg:ml-[60rem] lg:mt-[-28rem] lg:w-40' alt="angkasa logo" width={100} height={78} />

            <body>
                <div className='bg-blue-500 py-8 lg:h-[41.55rem] flex flex-row lg:w-[55rem]'>
                    <Image src={BirdLogo} alt="angkasa logo" width={500} height={478} />
                </div>
                <div className="py-4 lg:mt-[-38rem] flex flex-row-reverse lg:mr-28">
                    {children}
                </div>
            </body>
        </html>
    )
}