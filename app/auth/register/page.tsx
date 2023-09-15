import { registerUser } from "@/actions/userAction";
import Link from "next/link";

export default function Register() {
    return (
        <main>
            <h1 className="text-5xl font-black lg:mt-24 lg:ml-[-4vh]">Register</h1>

            <form className="lg:mt-5" action={registerUser}>
                <input type="text" name="name" className="border-b-2" placeholder="Full Name" />
                <br/>
                <input type="email" name="email" className="border-b-2 lg:mt-10" placeholder="Email" />
                <br/>
                <input type="password" name="password" className="border-b-2 lg:mt-10" placeholder="Password"/>
                <br/>
                <button type="submit" className="bg-blue-700 lg:w-60 lg:mt-5 rounded">Sign Up</button>
                <br/>
                <input type="checkbox" className="border-blue-700" required />
                <label>Accept terms and condition</label>
            </form>
            <hr className="m-5 w-[36vh] lg:ml-[0rem]"/>
            <div>
                Already have an account?
                <br/>
                <Link href="/auth/login" className="text-blue-700">
                    Sign In
                </Link>
            </div>
        </main>
    )
}