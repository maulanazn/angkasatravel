import Image from "next/image";
import React from "react";
import BirdLogo from '@/public/auth/angkasa-logo.png';
import './auth.module.css'

export default function AuthLayout({
    children,
} : {
    children: React.ReactNode
})  {
    return (
        <html>
            <body className='root'>
                {children}
                <div className=''>
                    <Image src={BirdLogo} alt="angkasa logo" width={500} height={478} />
                </div>
            </body>
        </html>
    )
}