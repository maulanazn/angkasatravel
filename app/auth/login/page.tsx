import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";

async function loginUser(formData: any) {
    'use server'
    const body = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`, formData)
    
    localStorage.setItem("token", body.data.data.access_token)
    redirect('/')
}

export default function Login() {
    return (
        <main>
            <h1 className='text-5xl font-black lg:mt-36 lg:ml-[-4vh]'>Login</h1>

            <form className="lg:mt-5" action={loginUser}>
                <input type="Email" name="email" className="border-b-2 w-60" placeholder="Email" />
                <br/>
                <input type="password" name="password" className="border-b-2 w-60 lg:mt-10" placeholder="Password"/>
                <br/>
                <button type="submit" className="bg-blue-700 lg:w-60 lg:mt-5 rounded">Sign In</button>
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