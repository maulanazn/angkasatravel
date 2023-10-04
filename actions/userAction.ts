import { redirect } from "next/navigation";

type RegisterData = {
    name: string
    email: string
    password: string
}

export async function registerUser(formData: FormData) {
    'use server'
    const name: any = formData.get("name")?.toString();
    const email: any = formData.get("email")?.toString();
    const password: any = formData.get("password")?.toString();

    !name || !email || !password && new Response("Noo")

    const newRegisterData: RegisterData = {
        name,
        email,
        password
    }

    const body = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(newRegisterData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!body.ok) {
        redirect('/auth/register')
    }
    redirect('/auth/login')
}
