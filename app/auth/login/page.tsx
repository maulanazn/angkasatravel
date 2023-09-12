import Link from "next/link";

export default function Login() {
    return (
        <main>
            <h1 className='text-5xl font-black lg:mt-36 lg:ml-[-4vh]'>Login</h1>

            <form className="lg:mt-5" action="/">
                <input type="text" className="border-b-2 w-60" placeholder="Username" />
                <br/>
                <input type="password" className="border-b-2 w-60 lg:mt-10" placeholder="Password"/>
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