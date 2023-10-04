'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const navigate = useRouter();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    async function postLoginData(event: any) {
        event.preventDefault();

        const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, loginData, {headers: {
            "Content-Type": "application/json"
        }});

        localStorage.setItem("token", result.data.data.access_token);
        localStorage.setItem("refresh_token", result.data.data.refresh_token);
        localStorage.setItem("uniqId", result.data.data.uniqId);

        navigate.replace("/")
    }

    function onLoginChange(event: any) {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <main>
            <h1 className='text-5xl font-black lg:mt-36 lg:ml-[-4vh]'>Login</h1>

            <form className="lg:mt-5">
                <input type="email" name="email" onChange={onLoginChange} className="border-b-2 w-60" placeholder="Email" />
                <br/>
                <input type="password" name="password" onChange={onLoginChange} className="border-b-2 w-60 lg:mt-10" placeholder="Password"/>
                <br/>
                <button onClick={postLoginData} className="bg-blue-700 lg:w-60 lg:mt-5 rounded">Sign In</button>
            </form>

            <div>
                Did you forgot your password?
                <br/>
                <Link href="#" className="text-blue-700">
                    Tap here for reset
                </Link>
            </div>
        </main>
    )
}