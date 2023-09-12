import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Angkasa Travel</h1>

      <Link href="/auth/register">Sign Up</Link>
    </main>
  )
}
